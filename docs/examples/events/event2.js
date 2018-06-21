
// 添加事件到监听器数组的开头  .prependListener(eventName, callback) 
// 添加事件到监听器数组的开头 但只执行一次  .prependOnceListener(eventName, callback) 
// 移除所有监听 .removeAllListeners([eventName])
// 返回监听事件， 如果是once监听的事件，会返回 listener 执行后不会移除once的绑定 ，
// 原本的事件触发后 会移除once监听的事件
//  .rawListeners(eventName)
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('event',()=>{
  console.log(1);
}).once('event',()=>{
  console.log(2)  
}).prependListener('event',()=>{
  console.log(3)
})

// emitter.emit('event'); // 3 2 1
// emitter.emit('event'); // 3 1
let e = emitter.rawListeners('event')[2];
e.listener() //执行后 不会 移除once的绑定
// e() //执行后 就会 移除once的绑定
emitter.emit('event'); 