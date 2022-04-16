const EventEmitter = require('events');
const net = require('net');
const Socket = require('server');

class parserMessage {
    constructor(message) {
        this.message = message;
        this.judge();
    }

    judge() {
        this.theMessage = {theType: "theProtWu", version: "0.1", body: "hello"};
        const messageList = this.message.split('\n');
        const head = messageList.slice(1, -1);
        const body = messageList.slice(-1);
        this.parseHead(head);
    }

    parseHead(head) {
        const [theType, version] = head.split('\t');
        this.theMessage.theType = theType;
        this.theMessage.version = version;
    }

    parserBody(body) {
        if (!body) {
            return this.theMessage.body = "";
        }
        this.theMessage.body = body;
        this.replyText = JSON.parse(JSON.stringify(this.theMessage));
        
    }
}

class 

// 继承一下node中的class
class wuNewServer extends EventEmitter {
    constructor()

    end() {
        socket
    }
}