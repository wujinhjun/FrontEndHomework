const comProt = require('./myProtocol/newProtocol');

const server = comProt.createServer((wuProt) => {
    wuProt.on('data', (data) => {
        console.log('服务器收到:', data.toString('utf-8'));
        wuProt.end('道友留步');
    });
});

// 启动服务器
server.listen(8080);