const express=require('express')
const router=express.Router()
const adminHelper=require('../helpers/adminHelpers')
router.post('/login',(req,res)=>{
    console.log(req.body);
    adminHelper.login(req.body).then((token)=>{
        res.json({status:"ok",token:token , admin:true})
    }).catch(()=>{
        res.json({status:"err",admin:false})
    })

})


module.exports=router