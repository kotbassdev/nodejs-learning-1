var http = require('http')
var url = require('url')

http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type":"text/html"});

    var qs = url.parse(req.url,true).query;
    console.log(`QueryString Search:${qs.search}`)

    res.end("App Query String")

}).listen(5001,() => console.log("Start Server On Port:5001"))

// http://127.0.0.1:5001/?search=nike