const fs = require('fs');

const file = '../net/net.js';

// 不建议在调用 fs.open() 、 fs.readFile() 或 fs.writeFile() 之前使用 fs.access() 
// 检查一个文件的可访问性。 如此处理会造成紊乱情况，因为其他进程可能在两个调用之间改变该文件的状态。
//  所以，用户代码应该直接打开/读取/写入文件，当文件无法访问时再处理错误。

// 检查文件是否存在于当前目录。
fs.access(file, fs.constants.F_OK, (err) => {
  console.log(`${file} ${err ? '不存在' : '存在'}`);
});

// 检查文件是否可读。
fs.access(file, fs.constants.R_OK, (err) => {
  console.log(`${file} ${err ? '不可读' : '可读'}`);
});

// 检查文件是否可写。
fs.access(file, fs.constants.W_OK, (err) => {
  console.log(`${file} ${err ? '不可写' : '可写'}`);
});
