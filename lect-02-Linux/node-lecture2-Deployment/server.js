const http=require("http");
const fs=require("fs");


const config=JSON.parse(
    fs.readFileSync("/etc/node-demo/config.json","utf8")
);


function log(message){
    const line=new Date().toISOString()+"-"+message+"\n";

    fs.appendFileSync(
        "/var/log/node-demo/application.log",
        line
    );
}

const server=http.createServer((req,res)=>{
    log(`${req.method} ${req.url}`);

    if(req.url==="/hello"){
        res.writeHead(200,{
        "content-Type":"text/plain"
        });

        res.end(config.message);
        return;
    }
    res.writeHead(404);
    res.end("Not Found");
});


server.listen(config.port,"0.0.0.0",()=>{
    log(`server started on port ${config.port}`);

    console.log(`Server running on port ${config.port}`);
})