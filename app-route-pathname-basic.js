var http = require('http')
var url = require('url')


http.createServer((req,res) => {
    const pathname = url.parse(req.url,true).pathname;

    
    switch(pathname){
        case '/': res.end("root path");
        case '/blog': res.end("Blog path");
    }
}).listen(5002,() => console.log('Start Server On Port:5002'));