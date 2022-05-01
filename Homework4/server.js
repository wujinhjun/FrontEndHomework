const net = require('net');
const {Parser} = require('./myProtocol/theProtocol');
const {package} = require('./myProtocol/package');

const server = net.createServer((socket) => {
    const parser = new Parser();
    socket.on('data', (data) => {
        parser.processMessage(data);
        if (parser.judgeCompletion()) {
            console.log('服务器收到: ', parser.reduMessage());
            socket.write(package('\n来自于服务器的：\n'))
            socket.end(package('hello, wujinhjun\n'));
        } else {
            console.log("服务器：未连接到客户端");
        }
    });

    socket.on('close', () => {
        console.log('服务器已关闭');
    })

    socket.on('error', () => {
        console.log('未知错误');
    })
})

server.listen(8080);