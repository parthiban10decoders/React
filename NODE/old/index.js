const http=require("http")
const hostname="localhost";
const port=3000;
const server=http.createServer(function(req,res){
    console.log('reeeeeee',req.method)
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World\n');
});
server.listen(port,hostname,function(){
    console.log('server running at http://'+hostname+':'+'port'+'/');
});

