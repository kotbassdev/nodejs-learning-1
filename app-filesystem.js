var http = require('http')
var fs = require('fs')

http.createServer((req,res) => {
    
    // Read File
    fs.readFile('./demo-file-1.html',(err,data) => {
        console.log(err)
        
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    });

    // Create File
    // Update File
    // Delete File
    // Rename File
}).listen(5002,() => console.log("Start Server On Port:5002"))