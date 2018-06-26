
# Timer

setInterval setTimeout 跟js一样，不再累述  

## Immediate 类

>setImmediate(callback[, ...args])  
clearImmediate(immediate)
immediate.ref()  
immediate.unref()

在[event loop](./eventloop.html)中的 check 阶段调用, 在nodejs的事件处理机制才有

```js
setTimeout(() => {
  console.log(1)
  setImmediate(()=>{
    console.log(2)
  })

  const immediate = setImmediate(()=>{
    console.log(4)
  })
  clearImmediate(immediate);

}, 0);

setImmediate(()=>{
  console.log(3)
})

//  1 3 2
// 从第一个阶段的 timer callback开始先执行 setTimeout
// 在到check callback阶段 调用 setImmediate
// 再进入下一个循环，到check callback阶段调用 setTimeout
```

另一个例子

```js

const immediate1 = setImmediate(()=>{
  console.log(3)
})

setTimeout(() => {
  console.log(1);
  setImmediate(()=>{
    console.log(2);
    immediate1.ref();
  })

}, 0);

immediate1.unref();

// 1 2 3
```
