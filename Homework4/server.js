const net = require('net');
const {Parser} = require('./myProtocol/theProtocol');
const {package} = require('./myProtocol/package');

const server = net.createServer((socket) => {
    const parser = new Parser();
    socket.on('data', (data) => {
        parser.processMessage(data);
        if (parser.judgeCompletion()) {
            console.log('服务器收到:', parser.reduMessage());
            socket.end(package('hello, the client'))
        } else {
            console.log("I can't connect client……");
        }
    });

    socket.on('close', () => {
        console.log('server close');
    })

    socket.on('error', () => {
        console.log('error');
    })
})

server.listen(8080);