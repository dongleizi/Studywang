
var censor = require("censorify-wang");
console.dir(censor);
console.log(JSON.stringify(censor. getCensoredWords()));
console.log(censor.censor("Some very sad ,bad and mad text."));
censor.addCensoredWord("gloomy");
console.log(JSON.stringify(censor. getCensoredWords()));
console.log(censor.censor("Some very sad ,bad and mad text.gloomy"));