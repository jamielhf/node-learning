# Dns - 域名服务器

## 模块说明

主要处理DNS服务器的域名解析和反解析

## 域名解析

### dns.lookup(hostname[, options], callback)

将域名（比如 'yy.com'）解析为第一条找到的记录 A （IPV4）或 AAAA(IPV6)。参数 options可以是一个对象或整数。如果没有提供 options，IP v4 和 v6 地址都可以。如果 options 是整数，则必须是 4 或 6。

```javascript
const dns = require('dns');

dns.lookup('yy.com', (err, address, family) => {
  console.log('IP 地址: %j 地址族: IPv%s', address, family);
  // IP 地址: "221.228.79.225" 地址族: IPv4
});

```

### dns.resolve4(hostname[, options], callback)

resolve4 与 lookup 的不同点在于，lookup函数是用底层操作系统工具进行域名解析，且无需进行网络通信，会受本地的/etc/hosts/配置文件影响，而 resolve4 是通过接到一个真实的 DNS 服务器进行域名解析，且始终使用网络进行 DNS 查询。

```javascript
const dns = require('dns');

dns.resolve4('yy.com',(err, addresses)=>{
  if (err) throw err;
  console.log(addresses);
  // [ '113.107.236.195', '221.228.79.225' ]
})

```

## DNS反向解析

### dns.reverse(ip, callback)

执行一个反向DNS查询返回IPv4或IPv6地址的主机名的数组,出错情况下，err是一个Error对象，err.code代码错误码。

```javascript
const dns = require('dns');

dns.lookup('www.github.com', (err, address, family) => {
  dns.reverse(address,  (err, hostnames) => {
  if (err) {
     console.log(err.stack);
  }
   console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
   //  反向解析 13.229.188.59: ["ec2-13-229-188-59.ap-southeast-1.compute.amazonaws.com"]
  });  
});
```

## 错误码列表

```bash
dns.NODATA: 无数据响应。
dns.FORMERR: 查询格式错误。
dns.SERVFAIL: 常规失败。
dns.NOTFOUND: 没有找到域名。
dns.NOTIMP: 未实现请求的操作。
dns.REFUSED: 拒绝查询。
dns.BADQUERY: 查询格式错误。
dns.BADNAME: 域名格式错误。
dns.BADFAMILY: 地址协议不支持。
dns.BADRESP: 回复格式错误。
dns.CONNREFUSED: 无法连接到 DNS 服务器。
dns.TIMEOUT: 连接 DNS 服务器超时。
dns.EOF: 文件末端。
dns.FILE: 读文件错误。
dns.NOMEM: 内存溢出。
dns.DESTRUCTION: 通道被摧毁。
dns.BADSTR: 字符串格式错误。
dns.BADFLAGS: 非法标识符。
dns.NONAME: 所给主机不是数字。
dns.BADHINTS: 非法HINTS标识符。
dns.NOTINITIALIZED: c c-ares 库尚未初始化。
dns.LOADIPHLPAPI: 加载 iphlpapi.dll 出错。
dns.ADDRGETNETWORKPARAMS: 无法找到 GetNetworkParams 函数。
dns.CANCELLED: 取消 DNS 查询。

```