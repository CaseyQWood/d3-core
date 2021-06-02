const net = require('net')

const connect = () => {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  conn.setEncoding('utf8');

  conn.on('connect', function() {
    console.log(`you are connected`)
  });

  conn.on('data', function(data) {
    console.log(`recieved data from server: ${data}`)
  });

  return conn;
};

module.exports = {
  connect
}
