const express = require("express");
const router = express.Router();
const adminHelper = require("../helpers/adminHelpers");
router.post("/login", (req, res) => {
  console.log(req.body);
  adminHelper
    .login(req.body)
    .then((token) => {
      res.json({ status: "ok", token: token, admin: true });
    })
    .catch(() => {
      res.json({ status: "err", admin: false });
    });
});
router.get("/allForms", async (req, res) => {
  adminHelper
    .getAllForms()
    .then((Forms) => {
      console.log("calll");
      res.json({ status: "ok", Forms: Forms });
    })
    .catch(() => {
      res.json({ status: "err" });
    });
});
router.post("/change-status", (req, res) => {
  adminHelper.changeFormStatus(req.body);
});
router.get("/getForm/:id", (req, res) => { 
    adminHelper.getForm(req.params.id).then((form)=>{
        res.json({status:"ok" , Form:form})
    })
});
router.get('/removeForm/:id',(req,res)=>{
    console.log(req.params.id);
    adminHelper.removeForm(req.params.id)
})

module.exports = router;
