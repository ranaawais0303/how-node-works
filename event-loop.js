const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
//////by default size 4 ///////
// process.env.UV_THREADPOOL_SIZE = 3;

////////////////////////////////
setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.text", () => {
  console.log("I/O finished");
  console.log("---------------");

  /////////////3rd///////////////////
  setTimeout(() => {
    console.log("Timer 2 finished", 0);
  });

  setTimeout(() => {
    console.log("Timer 3 finished", 3000);
  });

  ////after top level 2nd one Immediate function///
  setImmediate(() => {
    console.log("Immediate 2 finished");
  });

  //////////////Next tick//////////////
  process.nextTick(() => console.log("Process.nextTick"));

  /////crypto incryption thread pool//

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  //
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  //
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  //
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
});

//////////display first//////////////////
console.log("hello from the top-level code");
