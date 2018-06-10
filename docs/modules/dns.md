# 域名解析

## dns.lookup(hostname[, options], callback)

将域名（比如 'yy.com'）解析为第一条找到的记录 A （IPV4）或 AAAA(IPV6)。参数 options可以是一个对象或整数。如果没有提供 options，IP v4 和 v6 地址都可以。如果 options 是整数，则必须是 4 或 6。

```javascript
const dns = require('dns');

dns.lookup('yy.com', (err, address, family) => {
  console.log('IP 地址: %j 地址族: IPv%s', address, family);
  // IP 地址: "221.228.79.225" 地址族: IPv4
});

```

## dns.resolve4(hostname[, options], callback)

resolve4 与 lookup 的不同点在于，lookup函数是用底层操作系统工具进行域名解析，且无需进行网络通信，会受本地的/etc/hosts/配置文件影响，而 resolve4 是通过接到一个真实的 DNS 服务器进行域名解析，且始终使用网络进行 DNS 查询。

```javascript
const dns = require('dns');

dns.resolve4('yy.com',(err, addresses)=>{
  if (err) throw err;
  console.log(addresses);
  // [ '113.107.236.195', '221.228.79.225' ]
})

```
