var request = require('request');

request('https://gist.githubusercontent.com/metaraine/10394189/raw/c300efaa32e854e6b3d78f0c9388fa0ed02eba18/webcolors.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
  		var colors = JSON.parse(body);

  }

  for(var i = 0 ; i<colors.length ; i++){
  	if(colors[i].name.toUpperCase() === process.argv[2].toUpperCase()){
  		console.log(colors[i]['rgb']['r'] + ", " + colors[i]['rgb']['g'] + ", " + colors[i]['rgb']['b']);
  	}
  }
});

