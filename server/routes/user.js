const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const userHelper = require("../helpers/userHelpers");

router.get("/", (req, res) => {
  res.send("router");
});
router.post("/register", (req, res) => {
  userHelper
    .addUser(req.body)
    .then(() => {
      res.json({ status: "ok" });
    })
    .catch(() => {
      res.json({ status: "err" });
    });
});
router.post("/login", (req, res) => {
  console.log(req.body);
  userHelper
    .login(req.body)
    .then((token) => {
        console.log(token);
      res.json({ status: "ok", token: token, user: true });
    })
    .catch(() => {
      res.json({ status: "err", user: false });
    });
});
router.post('/apply-form/:id',(req,res)=>{
    console.log("forme submission success");
    console.log(req.params.id);
    console.log(req.body);
    userHelper.addFormData(req.body,req.params.id).then(()=>{
      res.json({status:"ok", form:true})
    }).catch(()=>{
      res.json({status:"err" , form:false})
    })
})
module.exports = router;
