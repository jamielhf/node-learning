

const immediate1 = setImmediate(()=>{
  console.log(1)
})

const immediate2 = setImmediate(()=>{
  console.log(2)
})

setTimeout(() => {
  console.log(3);

}, 0);


immediate1.unref();