const http = require('http');
const fs = require('fs');

http.createServer(function (req,res) {
  fs.readFile("./index.html",function (err,html) {
    if (req.url.indexOf("favicon.ico")>0) {return;}
    var html_string=html.toString();
    var arregloParametro=[],parametros={};
    var variables=html_string.match(/[^\{\}]+(?=\})/g);
    var nombre= "codigo ";
    if (req.url.indexOf("?")>0) {
      var urlData=req.url.split("?");
      var arregloParametro=urlData[1].split("&");
    }
    for (var i = arregloParametro.length-1;i>=0 ;i--) {
      var parametro=arregloParametro[i];
      var parametroData= parametro.split("=");
      parametros[parametroData[0]]=parametroData[1];
    }

    for (var i = variables.length-1; i >= 0; i--) {
      var  variable=variables[i];
      html_string=html_string.replace("{"+variables[i]+"}",parametros[variable]);


    };
  res.writeHead(200,{"content-Type":"text/html"})
  res.write(html_string);
  res.end();
  });

}).listen(8080);
