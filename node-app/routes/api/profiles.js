//@login & register
const express = require("express");
const router = express.Router();

//引入User数据模型
const  Profile = require("../../models/Profile");

//引入passport实现token验证
const passport = require("passport");

// $route  GET  api/profiles/test
// @desc   返回的请求的json数据
// @access public
router.get("/test",(req,res) => {
    res.json({msg:"profiles works"})
})


// $route  POST  api/profiles/add
// @desc   创建信息接口
// @access Private
router.post("/add",passport.authenticate("jwt",{ session:false }),(req,res) =>{
    const profileFields = {};

    if(req.body.type) profileFields.type = req.body.type;
    if(req.body.describe) profileFields.describe = req.body.describe;
    if(req.body.income) profileFields.income = req.body.income;
    if(req.body.expend) profileFields.expend = req.body.expend;
    if(req.body.cash) profileFields.cash = req.body.cash;
    if(req.body.remark) profileFields.remark = req.body.remark;

    new Profile(profileFields).save().then( profile => {
        res.json(profile)
    })
})





module.exports = router;