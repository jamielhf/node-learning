const net = require('net');

const socket = net.createConnection('3002','127.0.01');

socket.setEncoding('utf-8')

socket.on('data',(data)=>{
    console.log(data);
})
socket.write('我是客户端');

socket.write('我是客户端2');

socket.write('我是客户端3');

socket.end('我是客户端，结束连接了')