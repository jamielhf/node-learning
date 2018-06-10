const dns = require('dns');

dns.resolve4('yy.com',(err, addresses)=>{
  if (err) throw err;
  console.log(addresses);
  // [ '113.107.236.195', '221.228.79.225' ]
})

