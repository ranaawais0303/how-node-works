const EventEmitter = require("events");
const http = require("http");

// const myEmitter = new EventEmitter();

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();

///on is observer////////////
myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Customer name : awais");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9);

///////////////////////
const server = http.createServer();
server.on("request", (req, res) => {
  console.log("request recieved");
  console.log(req.url);
  res.end("request recieved");
});

server.on("request", (req, res) => {
  console.log("another request recieved");
});

server.on("close", () => {
  console.log("Server close");
});

server.listen(8000, "localhost", () => {
  console.log("waiting for request");
});
