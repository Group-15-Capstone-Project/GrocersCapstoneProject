//load all the modules needed 
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require('mongoose');
let cors = require("cors");
//const bodyParser = require("body-parser");


//setting up the database
const mongoDB = "mongodb+srv://suppeople111:TCSISCOOL123@cluster0.kg8o6.mongodb.net/Capstone?retryWrites=true&w=majority"
mongoose.connect(mongoDB, {useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Connected");
}).catch(err => console.log(err))


let app = express();
app.use(cors());
app.use(bodyParser.json());

