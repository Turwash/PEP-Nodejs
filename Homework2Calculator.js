// Question 2. Extend the /add and /multiply api to add/multiply a list of integers not just two nums

const express = require('express')
const app = express()
app.use(express.json())

// Addlist 

app.get('/addList',(req,res)=>{
    const num = req.query.Number;
    const numbers = num.split(",");
    console.log(numbers)
    sum = 0;
    for(let i = 0 ; i<numbers.length; i++){
        if(isNaN(numbers[i])){
            res.send({
                error:"Not a valid Number"
            })
        }
        sum += Number(numbers[i]);
    }
    res.send({sum})
})

app.get('/mulList',(req,res)=>{
    const num = req.query.Number;
    const numbers = num.split(",");
    console.log(numbers)
    mul = 1;
    for(let i = 0 ; i<numbers.length; i++){
        if(isNaN(numbers[i])){
            res.send({
                error:"Not a valid Number"
            })
        }
        mul *= Number(numbers[i]);
    }
    res.send({mul})
})




app.listen(3003,()=>{
    console.log("Running at 3003")
})