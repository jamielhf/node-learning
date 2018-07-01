
# Event loop - 事件处理机制

## 每个阶段的简单概要：

- timers: 执行setTimeout() 和 setInterval() 预先设定的回调函数。
- I/O callbacks: 大部分执行都是timers 阶段或是setImmediate() 预先设定的并且出现异常的回调函数事件。
- idle, prepare: nodejs 内部函数调用。
- poll: 搜寻I/O事件，nodejs进程在这个阶段会选择在该阶段适当的阻塞一段时间。
- check: setImmediate() 函数会在这个阶段执行。
- close callbacks: 执行一些诸如关闭事件的回调函数，如socket.on('close', ...) 。
