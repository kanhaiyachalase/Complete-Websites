const express = require("express");
const path = require("path");
const hbs = require("hbs");
require("./db/conn");
const User = require("./models/usermessage");

const app = express();
const port = process.env.PORT || 3000;

// connect backend to fontend

const staticpath = path.join(__dirname,"../public");
const templatespath = path.join(__dirname,"../templates/views");
const partialspath = path.join(__dirname,"../templates/partials");

// middle ware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}));
app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views",templatespath);
hbs.registerPartials(partialspath);


//routing
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/contact",(req, res) => {
    res.render("contact");
});
app.post("./forms",async(req,res)=> {
       try {
           res.send(req.body);
       } catch (error) {
           res.status(500).send(error);
       }
});


//server
app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});