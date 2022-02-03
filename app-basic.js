var http = require('http')
var dt = require('./modules/myfirst-module')

http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html"})
	res.write(`The date and time: ${dt.myDateTime()}`)
	res.write("<br />")
	res.end("Hello NodeJs Basic")
}).listen(5000,function(){
	console.log("Server Start On Port:5000")
})