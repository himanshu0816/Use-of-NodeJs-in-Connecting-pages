const http = require ('http')
const path = require ('path')
const fs = require ('fs')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile(path.join(__dirname,'public','index.html'),(error,content)=>{
            res.writeHead(200,{'Content-Type':"text/html"})
            res.end(content);
        })
    }
    else if(req.url=='/about'){
        fs.readFile(path.join(__dirname,'public','about.html'),(error,data)=>{
            res.writeHead(203,{'Content-Type':"text/html"})
            res.end(data)
        })
    }
    else if(req.url =='/'){
        fs.readFile(path.join(__dirname,'public','contact.html'),(error,data)=>{
            res.writeHead(202,{'Content-Type':"text/html"})
        })
    }
    else if(req.url==='/api/users'){
        const users=[
            {name:'Ayush',age:23},
            {name:'vinod',age:20}
        ]
        res.writeHead(200,{'Content-Type':"application/jason"})
        res,end(JSON.stringify(users))
    }
})
const PORT = process.env.PORT ||3000
server.listen(PORT,()=>console.log(`server running at ${PORT}`))
