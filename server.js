const express= require('express')

const app= express()

app.use((req,res)=>{
    console.log('welcome from home')
})



app.listen(3000,()=>console.log('server run on port 3000'))