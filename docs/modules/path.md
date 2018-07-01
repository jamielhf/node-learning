# Path - 路径处理

## 模块说明

path 模块提供了一些工具函数，用于处理文件与目录的路径，算是node模块中使用频率比较高的模块

## 获取路径信息

### path.basename(path[, ext])

返回 path 的最后一部分 第二个参数是可选的文件扩展名  

### path.dirname(path)

方法返回一个 path 所在的目录 也是返回一个路径

### path.extname(path)

方法返回 path 的扩展名，即从 path 的最后一部分中的最后一个 .（句号）字符到字符串结束。
如果 path 的最后一部分没有 . 或 path 的文件名的第一个字符是 .，则返回一个空字符串

### 例子

```javascript
const path = require('path');
const p = '/Users/admin/Documents/www/node-learning/docs/examples/path/path.js';

const name = path.basename(p);
const name2 = path.basename(p,'.js');
// path.js
console.log(name);
// path
console.log(name2);

const dirname = path.dirname(p);
// /Users/admin/Documents/www/node-learning/docs/examples/path
console.log(dirname);

const ext = path.extname(p);
//.js
console.log(ext);

```

## 路径处理

### path.relative(from, to)

返回从 from 到 to 的相对路径（基于当前工作目录）

### path.resolve([...paths])

跟join方法类似，但是返回绝对的路径，如果处理完全部给定的 path 片段后还未生成一个绝对路径，
则当前工作目录会被用

### path.join([...paths])

使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。

### path.normalize(normalize)

规范化给定的 path，并解析 '..' 和 '.' 片段

### 例子

```javascript
const path = require('path');

const join = path.join('/bar','dd','../foo','.');
// /bar/foo
console.log(join);


const normalize = path.normalize('/foo/bar//baz/asdf/quux/..');
//  /foo/bar/baz/asdf
console.log(normalize);

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
```

## 文件路径分解/组合

### path.parse(path)

返回一个对象，对象的属性表示 path 的元素。 尾部文件分隔符会被忽略
返回的对象有以下属性：dir,roo,base,name,ext

```bash
linux下
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
"  /    home/user/dir / file  .txt "
└──────┴──────────────┴──────┴─────┘
window下
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
" C:\      path\dir   \ file  .txt "
└──────┴──────────────┴──────┴─────┘
```

### path.format(pathObject)

会从一个对象返回一个路径字符串。 与 path.parse() 相反。

### 文档的例子

```javascript

path.parse('/home/user/dir/file.txt');
// 返回:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }



// 如果提供了 `dir`、`root` 和 `base`，则返回 `${dir}${path.sep}${base}`。
// `root` 会被忽略。
path.format({
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt'
});
// 返回: '/home/user/dir/file.txt'

// 如果没有指定 `dir`，则 `root` 会被使用。
// 如果只提供了 `root` 或 `dir` 等于 `root`，则平台的分隔符不会被包含。
// `ext` 会被忽略。
path.format({
  root: '/',
  base: 'file.txt',
  ext: 'ignored'
});
// 返回: '/file.txt'

// 如果没有指定 `base`，则 `name` + `ext` 会被使用。
path.format({
  root: '/',
  name: 'file',
  ext: '.txt'
});
// 返回: '/file.txt'


```

## 其他属性

### path.posix

属性提供了 path 方法针对 POSIX 的实现。

### path.sep

提供了平台特定的路径片段分隔符：
Windows 上是 \
POSIX 上是 /

### path.win32

提供了 path 方法针对 Windows 的实现。

### path.delimiter

提供平台特定的路径分隔符：
Windows 上是 ;
POSIX 上是 :

## 其他方法

### path.isAbsolute(path)

会判定 path 是否为一个绝对路径。返回true或false