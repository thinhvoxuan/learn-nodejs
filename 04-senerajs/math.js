const seneca = require('seneca')()

seneca.add({role: 'math', cmd: 'sum'}, (msg, respond) => {
  const sum = parseInt(msg.left) + parseInt(msg.right)
  respond(null, {answer: sum})
})

module.exports = seneca