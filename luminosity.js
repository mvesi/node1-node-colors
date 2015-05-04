// console.log(process.argv);

var luminosity = function() {


	var r = process.argv[2];

	var g = process.argv[3];

	var b = process.argv[4];

	var rgb = 0.2126*r + 0.7152*g + 0.0722*b;

	if(rgb > 155){
		return('light');
	}
	else{
		return('dark');
	}

};

console.log(luminosity());