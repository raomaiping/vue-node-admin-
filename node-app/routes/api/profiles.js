//@login & register
const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

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






module.exports = router;