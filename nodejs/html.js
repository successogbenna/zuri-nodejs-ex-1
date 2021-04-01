const http = require('http')
const server = http.createServer((req,res)=>{
     res.writeHead(200,{'Content-Type':'text/html'})
    res.end(`
    <html>
        <body>
            <h1>Welcome to Success Academy</h1>
            <p>A place of greater learning</p>
        </body>
    </html>
    `)
})
const port = 5000
server.listen(port,'127.0.0.1')




























