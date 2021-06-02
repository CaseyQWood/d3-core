const net = require('net')
const rl = require('readline')




// rl.on('SIGINT', () => {
//   rl.close();
// });

// const handleUserInput = (input) => {
//   rl.on('SIGINT', () => {
//     rl.close();
//   });
// }



const connect = () => {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
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




const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit()
  }
}

module.exports = {
  connect, 
  setupInput
}
