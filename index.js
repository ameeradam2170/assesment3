const express = require("express") 
const app =express();
var port =3000
var taskarr=[{
    Id :1, taskname:"buy beard"},
    { Id :2, taskname:"buy milk"}
]
app.use(express.json())
app.get('/t',(req,res)=>{
    res.send(taskarr)
})
app.post('/t',(req,res)=>{
    taskarr.push(req.body)
    res.send("Data added")
})
app.put('/t',(req,res)=>{
    taskarr.splice(1,0, req.body);
    res.send("updated successfully")
})  
app.delete('/t',(req,res)=>{
    // taskarr.pop()

    res.send("data deleted")
})
app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`)
})