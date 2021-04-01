const http = require('http')
const server = http.createServer((req,res)=>{
     res.writeHead(200,{'Content-Type':'application/json'})
     res.end(`{
      "Name" :'Success Ogbenna',
      "Hobbies": 'Engineering','Software Developer',
      "Country": 'Nigeria'
     }`)   
})
const port = 5000
server.listen(port,'127.0.0.1')
