const net = require('net')
const {IP, PORT} = require('./constants')

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');

  conn.on('connect', function() {
    console.log(`you are connected`)
  });

  conn.on('connect', function() {
    console.log(`your name is THT`)
    conn.write(`Name: THT`)
  });

  conn.on('data', function(data) {
    console.log(`recieved data from server: ${data}`)
  });

  return conn;
};


module.exports = {
  connect, 
}
