const path = require('path');

// 使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。
const join = path.join('/bar','dd','../foo','.');
// /bar/foo
console.log(join);

// 规范化给定的 path，并解析 '..' 和 '.' 片段。

const normalize = path.normalize('/foo/bar//baz/asdf/quux/..');
//  /foo/bar/baz/asdf
console.log(join);

// 返回从 from 到 to 的相对路径（基于当前工作目录）
const relative = path.relative('/a/b/c/d', '/a/b/e/f');
const relative1 = path.relative('/a/b/c/d', '');
const relative2 = path.relative('/a/b/c/d', '/a/b/c/d');
// ../../e/f
console.log(relative);
// ../../../../Users/admin/Documents/www/node-learning/docs/examples/path
console.log(relative1);
// 返回空字符
console.log(relative2);

const resolve = path.resolve('/foo/bar', './baz');
const resolve1 = path.resolve('/foo/bar', '/tmp/file/');
const resolve2 = path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');

// /foo/bar/baz
console.log(resolve);
// /tmp/file
console.log(resolve1);
// /Users/admin/Documents/www/node-learning/docs/examples/path/wwwroot/static_files/gif/image.gif
console.log(resolve2);
