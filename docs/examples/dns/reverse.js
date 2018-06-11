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