const express = require("express");
const mongoose = require("mongoose");
const routerUrl = require("./router/router");
const cors = require("cors");
const bp = require("body-parser"); 
const app = express();

app.use(express.urlencoded({extended: true}));

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const url = "mongodb://localhost:27017/wordcountDB";
mongoose.connect(url ,{useNewUrlParser: true }).catch((error => handleError(error)));
mongoose.connection.once("open",()=>console.log("db is connected"));

    
app.use(express.urlencoded({
    extended:true
    }));
app.use(express.json());
app.use(cors());
app.use("/app",routerUrl);
const Port = process.env.PORT || 8000;
app.listen(Port,()=>console.log("port is connected on 8000"));