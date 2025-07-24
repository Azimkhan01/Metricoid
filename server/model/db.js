const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test').then(()=>{
    console.log("connected succesfully!!")
}).catch((err)=>{
    console.log("error",err)
})

