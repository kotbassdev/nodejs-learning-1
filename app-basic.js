var http = require('http')

http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html"})
	res.end("Hello NodeJs Basic")
}).listen(5000,function(){
	console.log("Server Start On Port:5000")
})