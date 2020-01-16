const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();


//引入users.js
const users = require("./routes/api/users");

//引入profiles.js
const profiles = require("./routes/api/profiles");

//DB confing
const db = require("./config/keys").mongoURI;

//引入passport
const passport = require("passport");

//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true })
.then( () => console.log('MongoDB Connected'))
.catch( err => console.log(err));

//passport 初始化
app.use(passport.initialize());

require("./config/passport")(passport);


// app.get("/",(req,res) =>{
//     res.send("Hello World!");
// })


//使用routers
app.use("/api/users",users);
app.use("/api/profiles",profiles);



const port = process.env.PORT || 5000;

app.listen(port,() => {
    console.log(`Server running on port ${port}`);
    
})