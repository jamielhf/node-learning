const fs = require('fs');
const os = require('os');
const path = require('path');

// 异步
// fs.readFile('../net/net.js', (err, data)=>{
//   if(!err){
//     console.log(data.toString())
//   }
// })


// 创建文件夹
// fs.mkdirSync('./fs');
// 临时文件夹
// fs.mkdtemp(os.tmpdir(), (err, folder) => {
//   if (err) throw err;
//   console.log(folder);
// // });




// 遍历文件夹下面的文件
function readDir(p){
  const file = fs.readdirSync(p,'utf8');
  let results = [ ];

  for(const i of file){
    const newP = path.resolve(p,i);
    const stat = fs.statSync(newP);
    if(stat.isDirectory()){ 
      const t = {
        [i]:readDir(newP),
      };
      results.push(t);
    }else{
      results.push(i);
    }
  }
  return results;
}
const f = readDir('../')
console.log(f);