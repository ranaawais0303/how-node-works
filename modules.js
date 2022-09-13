// console.log(require("module").wrapper);

///module.export
const cal = require("./test-module-1");
const calc1 = new cal();
console.log(calc1.add(2, 3));
console.log(calc1.multiply(2, 3));
console.log(calc1.divide(2, 3));

///////exports
// const calc2 = require("./test-module-2");
//by using object distructuring
const { add, multiply, divide } = require("./test-module-2");
console.log(multiply(3, 4));

////Cache///////////
//first time it load full module and execute
//but in the next time this will
//take only function because already
//loaded into cache
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
