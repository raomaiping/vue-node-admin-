const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const app = express();

//引入users.js
const users = require("./routes/api/users");


mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true })
.then( () => console.log('MongoDB Connected'))
.catch( err => console.log(err));
app.get("/",(req,res) =>{
    res.send("Hello World!");
})


//使用routers
app.use("/api/users",users);



const port = process.env.PORT || 5000;

app.listen(port,() => {
    console.log(`Server running on port ${port}`);
    
})