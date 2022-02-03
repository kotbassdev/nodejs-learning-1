var http = require("http");
var fs = require("fs");
const { deepStrictEqual } = require("assert");

http
  .createServer((req, res) => {
    // Read File
    /*
    fs.readFile('./demo-file-1.html',(err,data) => {
        console.log(err)
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    });
    */


    // Create File
    // fs.appendFile , fs.open , fs.writeFile
    /*
    fs.appendFile('demo-1.txt','Hello Content',(err) => {
        // ถ้าไม่มีไฟล์ จะสร้างไฟล์ใหม่ขึ้นมาอัตโนมัติ
        if(err) throw err;
        console.log('Create File appendFile!');
    });
    fs.open('demo-2.txt','w',(err) => {
        // ถ้าไม่มีไฟล์ จะสร้างไฟล์ใหม่ขึ้นมาอัตโนมัติ
        if(err) throw err;
        console.log('Create File open!');
    });
    fs.writeFile('demo-3.txt','text Content',(err) => {
        // ถ้าไม่มีไฟล์ จะสร้างไฟล์ใหม่ขึ้นมาอัตโนมัติ
        if(err) throw err;
        console.log('Create File writeFile!');
    });
    */
    

    // Update File
    // fs.appendFile , fs.writeFile
    /*
    fs.appendFile('demo-4.txt','Text Content Append',(err) => {
        if (err) throw err;
        console.log('[Update]: AppendFile')
    });
    fs.writeFile('demo-5.txt','Text Write File',(err) => {
        // replace the content of the file
        if(err) throw err; 
        console.log('[Update]: WriteFile')
    });
    */
    

    // Delete File
    /*
    fs.unlink('demo-6.txt',(err) => {
        if(err) throw err;
        console.log('File Delete!')
        res.end();
    });
    */

    // Rename File
    fs.rename('demo-7.txt','demo-7-rename.txt',(err) => {
        if(err) throw err;
        console.log('Rename Success!');
        res.end();
    })
  })
  .listen(5002, () => console.log("Start Server On Port:5002"));
