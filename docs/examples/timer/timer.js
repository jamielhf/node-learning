
setTimeout(() => {
  console.log(1)
  setImmediate(()=>{
    console.log(2)
  })

  const immediate = setImmediate(()=>{
    console.log(4)
  })
  clearImmediate(immediate)

}, 0);

setImmediate(()=>{
  console.log(3)
})