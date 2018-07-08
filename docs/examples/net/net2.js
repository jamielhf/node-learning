const net =require('net');


const server = net.createServer( (socket) => {
    console.log('有人连接了1')
    socket.write('我是服务端');
    socket.on('data',(data)=>{
        console.log(`客户端说：${data}`);
    })
    socket.on('end',()=>{
        console.log('客户端关闭连接')
    })
})

server.on('connection',()=>{
    console.log('有人连接了2')
})

server.listen(3002,'127.0.0.1',()=>{
    console.log('开启服务')
})