const express = require('express');
var app=express();
app.set("view engine","jade");
app.get("/",function (req,res) {
  res.render("index");
});
app.post("/",function (req,res) {
  res.render("form");

});
app.get("/segunda",function (req,res) {
  res.render("segunda");

});

app.listen(8080);
