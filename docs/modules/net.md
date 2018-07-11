# Net 网络

## 模块说明

net模块主要有 net.Server 类 和 net.Socket 类，先介绍 net的一些方法

## 创建和连接一个TCP服务或IPC服务

### net.createServer([options][, connectionListener])

创建一个TCP服务，返回一个net.Server类

### net.createConnection()

当连接建立之后，返回一个net.Socket类 并触发服务端的 'connect' 事件。若制定了最后一个参数  connectListener，则它将会被添加到 'connect' 事件作为一个监听器。

* `net.createConnection(options[, connectListener])`
* `net.createConnection(path[, connectListener])` 用于 IPC 连接。
* `net.createConnection(port[, host][, connectListener])` 用于 TCP 连接。

### demo

服务端

```js
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
```

```bash
有人连接了1
有人连接了2
客户端说：我是客户端
客户端说：我是客户端2我是客户端3我是客户端，结束连接了
客户端关闭连接
```

客户端

```js
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


```

```bash
我是服务端
```

### 其他

`net.isIP(input)`  
input 是否是 IP 地址。无效的字符串则返回 0，IPv4 地址则返回 4，IPv6的地址则返回 6  
`net.isIPv4(input)`  
如果 input 是 IPv4 地址则返回 true，否则返回 false。  
`net.isIPv6(input)`  
如果 input 是 IPv6 地址则返回 true，否则返回 false。  

## net.Server 类

net.Server 是EventEmitter 的实例

### 监听的事件 on('xxx')

`close` 当server关闭的时候触发  
`connection` 当一个新的connection建立的时候触发  
`error` 当错误出现的时候触发  
`listening` 当服务被绑定后调用 server.listen()

### 一些方法和属性

`server.address()` 只有到了 'listening' 事件被触发时候.才可以调用 server.address()
`server.close([callback])` 关闭server, 触发close事件  
`server.getConnections(callback)`  异步获取服务器的当前并发连接数。回调函数的两个参数是 err 和 count。  
`server.listen()`   一个布尔值， 表明 server 是否正在监听连接
`server.maxConnections`   置该属性使得当 server 连接数过多时拒绝连接
`server.ref()`
`server.unref()`

## net.Socket 类

一个net.Socket也是一个duplex stream，所以它能被读或写，并且它也是一个EventEmitter。

### 监听的事件

`close` 当server关闭的时候触发  
`connection` 当一个新的connection建立的时候触发  
`error` 当错误出现的时候触发  
`listening` 当服务被绑定后调用 server.listen()
