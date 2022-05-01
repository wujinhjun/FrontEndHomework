const net = require('net'); 
const {package} = require('./myProtocol/package');
const { Parser } = require('./myProtocol/theProtocol');
require('./server');

// let a = package('hello world, @wujinhjun');
// console.log(a);
// console.log(a.toString('utf-8'));

const parser = new Parser();
const socket = net.connect({port:8080});

socket.on('data', (data) => {
    parser.processMessage(data);
    if (parser.judgeCompletion()) {
        console.log(parser.reduMessage());
        console.log('客户端收到：', parser.reduMessage());
    } else {
        console.log("I can't connect the server……");
    }
})

socket.on('connect', () => {
    // let message = package('hello');
    socket.write(package('王一凡'));
    socket.write(package('是'));
    socket.write(package('傻逼'));
    socket.write(package('\nhello'));
    socket.write(package(' this is '));
    socket.write(package('wujinhjun'));
    // socket.write('nice');
})

socket.on('error', () => {
    console.log('error');
})