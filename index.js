var http=require('http');
const { runInNewContext } = require('vm');
var hostname='127.0.0.1';
var port=8080;

const server =http.createServer(function(re,res){
    const path=req.url;
    const method=req.methkd;
    if(path==='/products'){
        if(method==='GET'){
            res.writeHead(200,{'Content-Type':'application/json'});
            const products= JSON.stringify([
                {
                name:"농구공",
                price:5000
            },{
                
            }]);
            res.end(products);

        }else if(method==="POST"){
res.end("생성되었습니다!");
        }
    }
    res.end("Good BYe");
});

server.listen(port,hostname);
console.log("grab market server on!");