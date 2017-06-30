function parse(req) {
  var arregloParametro=[],parametros={};
  if (req.url.indexOf("?")>0) {
    var urlData=req.url.split("?");
    var arregloParametro=urlData[1].split("&");
  }
  for (var i = arregloParametro.length-1;i>=0 ;i--) {
    var parametro=arregloParametro[i];
    var parametroData= parametro.split("=");
    parametros[parametroData[0]]=parametroData[1];
  }
  return parametros;

}
module.exports.parse=parse;
