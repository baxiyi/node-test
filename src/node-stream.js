var fs=require('fs');
var path=require('path');

var ws=fs.createWriteStream(path.join(__dirname,'test.txt'),{
    flags:'a'
},'utf-8');
ws.write('I am ws');
ws.write('I am writing');
ws.end();

var rs=fs.createReadStream(path.join(__dirname,'test.txt'),'utf-8');
rs.on('data',(chunk)=>{
    console.log(chunk);
})
rs.on('end',()=>{
    console.log('end');
})
rs.on('error',(err)=>{
    console.log(err);
})

//pipe用法：用来连接一个writable流和一个readable流
//实现文件内容复制
var rs=fs.createReadStream(path.join(__dirname,'test.txt'));
var ws=fs.createWriteStream(path.join(__dirname,'copied.txt'),{
    flags:'a'
});
rs.pipe(ws);

