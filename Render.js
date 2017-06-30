const http = require('http');
const fs = require('fs');
const parser= require('./paramParse.js');
const renders = require('./render2.js');
var p=parser.parse;
var r=renders.render2;


http.createServer(function (req,res) {
  fs.readFile("./index.html",function (err,html) {
    if (req.url.indexOf("favicon.ico")>0) {return;}
    var html_string=html.toString();
    var parametros=p(req);


  res.writeHead(200,{"content-Type":"text/html"})
  res.write(r(html_string,parametros));
  res.end();
  });

}).listen(8080);
