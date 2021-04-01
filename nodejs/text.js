const http = require('http')
const server = http.createServer((req,res)=>{
     res.writeHead(200,{'Content-Type':'text/plain'})
     res.end(`Zuri is the Best`)   
})
const port = 5000
server.listen(port,'127.0.0.1')
