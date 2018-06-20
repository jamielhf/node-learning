
// 事件 .on(eventName, callback) .addListener(eventName, callback)
// 一次 .once(eventName, callback)
// 异常 .on('error', callback)   
// 触发 .emit(eventName[, ...args]）;
// 移除 .off(eventName, callback) .removeListener(eventName, callback)




// 新的监听器被添加时，所有的 EventEmitter 会触发 'newListener' 事件；
// 当移除已存在的监听器时，则触发 'removeListener'。
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.once('newListener', (event,listener) => {
  console.log(event);
  myEmitter.on('event', (num) => {
    console.log(1,num);
  });
});

myEmitter.on('event', (num) => {
  console.log(2,num);
}).on('eventB', (num) => {
  console.log(2,num);
}).emit('event',123);
myEmitter.setMaxListeners(11);

console.log(myEmitter.getMaxListeners()); // 11
console.log(myEmitter.eventNames()); // [ 'event', 'eventB' ]
console.log(myEmitter.listenerCount('event')); // 2

// emitter.defaultMaxListeners 每个事件默认可以注册最多 10 个监听器
// emitter.getMaxListeners() 获取 监听器个数
// emitter.setMaxListeners() 设置 监听器个数
// emitter.eventNames() 回一个列出触发器已注册监听器的事件的数组。
// emitter.listenerCount(eventName) 监听器的数量




