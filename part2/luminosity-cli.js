var colorutil = require('./colorutil.js');

var calcResult = colorutil.luminosity(process.argv[2], process.argv[3], process.argv[4]);

console.log(calcResult);