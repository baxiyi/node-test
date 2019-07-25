let https=require('https');
let fs=require('fs');
let server=https.createServer({
    key:fs.readFileSync('key.pem'),
    cert:fs.readFileSync('cert.pem')
},(req,res)=>{
    res.writeHead(200);
    res.write('<h1>Hello Https!</h1>');
    res.end('Loaded');
});
server.listen(8000);