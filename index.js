// import choo
var choo = require('choo')

// import template
var main = require('./templates/main')

// initialize choo
var app = choo()

app.use(function (state, emitter) {
  // initialize app state
  state.animals = {
    lion: 'Hello! :3',
    crocodile: '*Rawr snap snap*'
  }

  // update state
  emitter.on('updateAnimal', function (data) {
    state.animals[data.type] = data.value
    emitter.emit('render')
  })
})

// declare routes
app.route('/', main)

// start app
app.mount('div')
