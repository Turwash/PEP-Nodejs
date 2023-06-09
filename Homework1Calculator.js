// Question 1. Create 4 apis: /add /subtract /multiply /divide to do corresponding operations

const express = require('express')
const app = express()
app.use(express.json())

//using req.query method
app.get('/add',(req,res)=>{
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2); 
    if(isNaN(num1) || isNaN(num2)){
        console.log("Not a Valid Input")
        res.status(400).send({error:"Please Provide Valid Input"}) // using status status here
        return
    }
    const sum = num1 + num2;
    console.log(sum)
    res.send({sum})
})

// using req.body method
app.get('/sub',(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2; 
    if(isNaN(num1) || isNaN(num2)){
        console.log("Not a Valid Input")
        res.send({error:"Please Provide Valid Input"})
        return
    }
    const sub = num1 - num2;
    console.log(sub)
    res.send({sub})
})

app.get('/mul',(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2; 
    if(isNaN(num1) || isNaN(num2)){
        console.log("Not a Valid Input")
        res.send({error:"Please Provide Valid Input"})
        return
    }
    const mul = num1 * num2;
    console.log(mul)
    res.send({mul})
})

app.get('/div',(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2; 
    if(isNaN(num1) || isNaN(num2) || num2 == 0){
        console.log("Not a Valid Input")
        res.send({error:"Please Provide Valid Input"})
        return
    }
    const div = num1 / num2;
    console.log(div)
    res.send({div})
})



app.listen(3003,()=>{
    console.log("Running at 3003")
})