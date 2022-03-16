const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log('server says', data);
  });

console.log("Connecting ...");
connect();

module.exports = connect;