var fs=require('fs');
var path=require('path');
//flag设置为a为追加模式
fs.writeFile(path.join(__dirname,'test.txt'),'hello',{
    flag:'a'
},(err,dta)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('written');
    }
});
fs.readFile(path.join(__dirname,'test.txt'),'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})