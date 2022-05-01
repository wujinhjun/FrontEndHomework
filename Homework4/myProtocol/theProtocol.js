class Parser {
    // 析构函数
    constructor(message) {
        this.message = message;
        this.byteFlow = null;
    }

    // 判断完整度
    // 如果开头是@，结尾是^且倒数第二个不是%
    // 则判断为完整
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
    }

    // 还原
    reduMessage() {
        let byteFlow = this.byteFlow;
        let messageLength = byteFlow.length - 2;
        // 判断长度
        for( let i = 0; i < byteFlow.length; i++) {
            if (byteFlow[i] == '0x25') {
                i++;
                messageLength--;
            }
        }
        let resultMessage = Buffer.alloc(messageLength);
        // console.log(messageLength);

        // 为转回utf准备
        for ( let i = 1, j = 0; i < byteFlow.length -1; i++, j++) {
            // 如果使用了两个及以上write的话，需要这个来处理中间的终止符与开始符
            if (byteFlow[i] == '0x5e' && byteFlow[i + 1] == '0x40'){
                i += 2;
            }
            
            // % ~ 25
            if (byteFlow[i] == '0x25') {
                i++;
            }

            resultMessage[j] = byteFlow[i];
        }
        let messageForUser = resultMessage.toString('utf-8');

        return messageForUser;
    }
}

module.exports = { Parser };