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
    fs.appendFile('demo-text-1.txt','Hello Content',(err) => {
        // ถ้าไม่มีไฟล์ จะสร้างไฟล์ใหม่ขึ้นมาอัตโนมัติ
        if(err) throw err;
        console.log('Create File appendFile!');
    });
    fs.open('demo-text-2.txt','w',(err) => {
        // ถ้าไม่มีไฟล์ จะสร้างไฟล์ใหม่ขึ้นมาอัตโนมัติ
        if(err) throw err;
        console.log('Create File open!');
    });
    fs.writeFile('demo-text-3.txt','text Content',(err) => {
        // ถ้าไม่มีไฟล์ จะสร้างไฟล์ใหม่ขึ้นมาอัตโนมัติ
        if(err) throw err;
        console.log('Create File writeFile!');
    });
    

    // Update File
    // Delete File
    // Rename File
  })
  .listen(5002, () => console.log("Start Server On Port:5002"));
