var http=require('http');
var url=require('url');
var server=http.createServer((req,res)=>{
    console.log(`${req.method} : ${req.url}`);
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>Inde Page</h1>');
    }
    else if(req.url === '/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>About</h1>');
        console.log(url.parse('https://localhost:8000/about'));
    }
    else{
        res.writeHead(404);
        res.end('404 not found');
    }
})
server.listen(8000);
console.log(`server is running at 8000`);