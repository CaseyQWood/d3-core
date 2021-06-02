const {connect, setupInput} = require('./client')
const rl = require('readline')

console.log('connecting....')
connect();
setupInput()