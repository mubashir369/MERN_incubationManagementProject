const Admin=require('../model/adminModel');
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
module.exports={
    login:(data)=>{
        return new Promise(async(resolve,reject)=>{
            try{
               const admin= await Admin.findOne({email:data.email})
               if(admin){
                   const valid=await bcrypt.compare(data.password,admin.password)
                   if(valid){
                       const token=jwt.sign({
                           id:admin._id,
                           email:admin.email,
                       },'secret123')
                       resolve(token)
                   } 
                   reject()
               } 

            }catch(er){
                console.log(er);
            }
        })
    }
    
}