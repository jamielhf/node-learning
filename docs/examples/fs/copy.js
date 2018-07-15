const fs = require('fs');

const file = '../net/net.js';


if(fs.existsSync(file)){ // 文件是否存在
  fs.copyFile(file, './net11.js',(err)=>{
    if(!err){
      console.log('复制成功')
    }
  })
}

