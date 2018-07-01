const net = require('net');

const PORT = '3001', HOST = '127.0.01';

const server = net.createServer((socket)=>{
  socket.on('close',()=>{
    console.log('关闭');
  })
})


server.listen(PORT,HOST,()=>{
  console.log('服务端：开始监听');
})