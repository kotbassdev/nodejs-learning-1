var http = require('http')
var url = require('url')
var formidable = require('formidable')
var fs = require('fs')

// fetch -XPOST -i -H "Content-Type: multipart/form-data" 'http://127.0.0.1:5002/upload' -F 'image=@image1.jpg'

http.createServer((req,res) => {
    var pathname = url.parse(req.url,true).pathname;
    if(pathname == "/upload"){

        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            if(err) throw err;

            var tmp = files.image.filepath;
            var destination = `./uploads/${files.image.newFilename}-${files.image.originalFilename}`

            fs.rename(tmp,destination,(err) => {
                console.log('uploaded')
                res.end("Upload Success")
            })
        });

    }else{
        console.log("404")
        res.end("404")
    }
}).listen(5002,() => console.log('start server on port:5002 for test upload file')) 