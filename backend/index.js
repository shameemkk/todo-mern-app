const express=require("express")
const mongoose=require("mongoose")
const cors = require('cors');

const TodoModel = require("./Models/Todo")


const app=express()
app.use(cors())
app.use(express.json())
const port=3001
const db_url='YOUR-URL'
mongoose.connect(db_url)


app.post('/add',(req, res)=>{
    const task= req.body.task;
    TodoModel.create({
        task:task
    }).then(result=>res.json(result))
    .catch(err=>res.json(err))

})

app.get('/get',(req, res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.put('/update/:id',(req,res)=>{
    const {id}=req.params;
    TodoModel.findByIdAndUpdate({_id:id},{done:true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    TodoModel.findByIdAndDelete(id)
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
    })

app.listen(port,()=>{
    console.log(`server is running port ${port}`)
})