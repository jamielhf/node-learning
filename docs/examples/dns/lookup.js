const dns = require('dns');

dns.lookup('yy.com', (err, address, family) => {
  console.log('IP 地址: %j 地址族: IPv%s', address, family);
  // IP 地址: "221.228.79.225" 地址族: IPv4
});