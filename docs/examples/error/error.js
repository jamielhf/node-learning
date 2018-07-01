


const EventsEmmiter = require('events');

class eventsEmmiter extends EventsEmmiter{};

eventsEmmiter.on('error',(e)=>{
  console.log(e);
})
eventsEmmiter.emit('error')


