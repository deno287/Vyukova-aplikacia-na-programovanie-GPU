
var parallel = require('../../../denis.js');
var fs = require('fs');
var source = parallel.readCore(__dirname + "/core.cl");
var kern = parallel.buildProgram(source, "core");
			
			var bufSused = [];
var maticaSused = [];