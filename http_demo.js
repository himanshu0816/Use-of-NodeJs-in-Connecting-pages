const http =require('http')
const { listeners } = require('process')

// Create server  Object
let server =http.createServer((request,response)=>{
    // console.log(request)
    // console.log(response)
    response.write("<h1>Hello World!!</h1>")
    response.end()
})
server.listen(5000,()=>console.log("server is running at port 5000"))