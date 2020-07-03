const express = require("express");
var PORT = process.env.PORT || 3001; 
const app = express();

app.get('/', function (req, res) {
  res.send('hello world')
});

app.listen(PORT, function() { 
  console.log("App listening on PORT " + PORT); 
});



 


