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
        // console.log(parser.reduMessage());
        console.log('客户端收到：', parser.reduMessage());
    } else {
        console.log("客户端：无法连接到服务器");
    }
})

socket.on('connect', () => {
    // 客户端发送一些东西过去
    socket.write(package('\n来自于客户端的:\n'));
    socket.write(package('hello,'));
    socket.write(package(' this is '));
    socket.write(package('wujinhjun\n'));
})

// 因为这个错误对我来说可能真的是未知的，orz
socket.on('error', () => {
    console.log('未知错误');
})