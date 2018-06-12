const path = require('path');
const p = '/Users/admin/Documents/www/node-learning/docs/examples/path/path.js';
// 返回 path 的最后一部分 第二个参数是可选的文件扩展名
const name = path.basename(p);
const name2 = path.basename(p,'.js');
// path.js
console.log(name);
// path
console.log(name2);

// 方法返回一个 path 所在的目录 也是返回一个路径
const dirname = path.dirname(p);
// /Users/admin/Documents/www/node-learning/docs/examples/path
console.log(dirname);
