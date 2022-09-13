// console.log(require("module").wrapper);

///module.export
const cal = require("./test-module-1");
const calc1 = new cal();
console.log(calc1.add(2, 3));
console.log(calc1.multiply(2, 3));
console.log(calc1.divide(2, 3));
