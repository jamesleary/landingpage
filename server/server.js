var express = require("express");
var app = express();
var port = process.env.PORT || 5000;

var path = require("path");
app.get("/*", function(req, res){
  console.log('got a request!', req.params[0]);

  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "/public/", file));
});
app.listen(port, function(){
  console.log('listening on the port 5000');
});
