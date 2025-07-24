require('./model/db')
const express = require('express')
const cors = require("cors");
const { Router } = require('./routes/routes');
const app = express();
app.use(cors())

app.use('/',Router)

app.listen(8000,()=>{
    console.log('====================================');
    console.log("server is listening..");
    console.log('====================================');
})