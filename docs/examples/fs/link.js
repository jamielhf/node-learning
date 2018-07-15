const fs = require('fs');

const file = '../net/net.js';


// 创建硬连
fs.linkSync(file, './net1.js');

// 创建软连
fs.symlinkSync(file, './net2.js');
