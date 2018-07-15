const fs = require('fs');

const file = '../net/net.js';


fs.stat(file,(err,stat)=>{
  console.log(stat.isSocket());
})