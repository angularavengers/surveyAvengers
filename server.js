const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const api = require("./server/routes/api");

const port = 3001;

const app = express();

app.use(express.static(path.join(__dirname,"dist")));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/api",api);

app.use("*",(req,res)=>{
    console.log(__filename);
    res.sendFile(path.join(__dirname,'dist/index.html'));
})

app.listen(port,function(){
    //alert(__dirname);
    console.log("listeing at port 3000");
})