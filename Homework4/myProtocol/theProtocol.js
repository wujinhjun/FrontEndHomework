const net = require('net');
const { buffer } = require('stream/consumers');

class Parser {
    // 析构函数
    constructor(message) {
        this.message = message;
        this.byteFlow = null;
    }

    // 判断完整度
    // 如果开头是@，结尾是^且倒数第二个不是%
    judgeCompletion() {
        const byteLength = this.byteFlow.length;
        if (this.byteFlow != null && byteLength >= 2 && this.byteFlow[0] == '0x40' && this.byteFlow[byteLength -1] == '0x5e') {
            if (this.byteFlow[byteLength - 2] == '0x25') {
                return false;
            }

            return true;
        }
        return false;
    }

    // 解析
    processMessage(data) {
        if (this.byteFlow == null) {
            this.byteFlow = data;
        } else {
            this.byteFlow = Buffer.concat([this.byteFlow,data]);
        }
        // console.log(this.byteFlow);
    }

    // 还原
    reduMessage() {
        let byteFlow = this.byteFlow;
        let messageLength = byteFlow.length - 2;
        for( let i = 0; i < byteFlow.length; i++) {
            if (byteFlow[i] == '0x25') {
                i++;
                messageLength--;
            }
        }

        let resultMessage = Buffer.alloc(messageLength);
        console.log(messageLength);
        // for(let i = 0; i < byteFlow.length -2; i++) {
        //     if (byteFlow[i + 1] == '0x25') {
        //         i++;
        //         resultMessage[i] = byteFlow[i + 2]
        //     } else {
        //         resultMessage[i] = byteFlow[i + 1];
        //     }
        // }

        for ( let i = 1, j = 0; i < byteFlow.length -1; i++, j++) {
            if (byteFlow[i] == '0x25') {
                i++;
            }
            // || byteFlow[i] == '0x40' || byteFlow[i] == '0x5e'
            if (byteFlow[i] == '0x5e' && byteFlow[i - 1] != '0x40'){
                i += 2;
            }
            resultMessage[j] = byteFlow[i];
        }
        let messageForUser = resultMessage.toString('utf-8');

        return messageForUser;
    }
}

module.exports = { Parser };