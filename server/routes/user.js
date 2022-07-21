const express=require('express')
const router=express.Router()
const User=require('../model/userModel')
const userHelper=require('../helpers/userHelpers')

router.get('/',(req,res)=>{
    res.send("router")
})
router.post('/register',(req,res)=>{
    console.log("register api call received");
    console.log(req.body);
    userHelper.addUser(req.body).then(()=>{
        res.json({status:"ok", })
    }).catch(()=>{
        res.json({status:"err"})
    })
})
module.exports=router