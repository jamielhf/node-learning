const http = require('http');

const server = http.createServer((req,res) => {
  console.log(req.headers, req.method);
})

server.listen(8000,()=>{
  const url = new URL('http://127.0.0.1:8000');
  const req = http.request(url);
  req.setHeader('Content-Type', 'text/html');
  req.end();
});