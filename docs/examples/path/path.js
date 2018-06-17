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

const ext = path.extname(p);
// 方法返回 path 的扩展名，即从 path 的最后一部分中的最后一个 .（句号）字符到字符串结束。 如果 path 的最后一部分没有 . 或 path 的文件名（见 path.basename()）的第一个字符是 .，则返回一个空字符串
//.js
console.log(ext);