// net模块是流式传输，所以要加上一个头，一个尾，并以此为标识
// 包文的开头用@ 0x40，结尾用^ 0x5e,
// 暂称为打包函数吧

function package(message)
{
    const messageEncoded = Buffer.from(message, 'utf-8');
    // console.log(messageEncoded);

    // 计算特殊符号
    let dataLength = 2;
    for (let i = 0; i < messageEncoded.length; i++) {
        dataLength++;
        // 转义符号，本来要用\，但不太方便，只好改了%
        if (messageEncoded[i] == '0x40' || messageEncoded[i] == '0x5e' || messageEncoded[i] == '0x25') {
            dataLength++;
        }
    }

    let theMessage = Buffer.alloc(dataLength);
    let numTemp = 0;
    
    theMessage[0] = '0x40';
    for (let i = 0; i < messageEncoded.length; i++) {
        if (messageEncoded[i] == '0x40' || messageEncoded[i] == '0x5e' || messageEncoded[i] == '0x25') {
            theMessage[i + 1 + numTemp] = '0x25';
            numTemp++;
        }
        theMessage[i + 1 + numTemp] = messageEncoded[i];
    }
    theMessage[dataLength - 1] = '0x5e';

    return theMessage;
}

module.exports = {package};
// let a = package('hello world, @wujinhjun');
// console.log(a);
// console.log(a.toString('utf-8'));

// const buffer = Buffer.alloc(3);
// console.log(buffer);

// buffer[0] = 0x23;
// buffer[1] = 0x24;
// buffer[2] = 0x2F;

// // console.log(buffer);
// // console.log(buffer.toString('utf-8'));
// // console.log('hello');

// console.log(Buffer.from('@', 'utf-8'));
// console.log(Buffer.from('^', 'utf-8'));
// console.log(Buffer.from('/', 'utf-8'));
// console.log(Buffer.from('%', 'utf-8'));

// let buffer1 = Buffer.allocUnsafe(3);

// console.log(buffer1);