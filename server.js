const http= require('http')


const server= http.createServer((req,res)=>{
    if(req.url=='/home'){
        res.statusCode=200
        res.write('welcome to home')
    }else if (req.url=='/contact'){
        res.statusCode=200
        res.write('welcome to contact')
    }else {
        res.statusCode=404
        res.write('not found')
    }
res.end()


})
server.listen(3000)