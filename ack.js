var express = require("express");

var app = express();

app.get("/", function(req, res){
  console.log("IT'S ALIVE!");
  res.render('index.ejs');
})

app.set('view engine', 'ejs')
app.set('views', './views')

app.listen(3000, function(){
  console.log("wow server is on and listening to 3000");
})