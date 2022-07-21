const User=require('../model/userModel')
const bcrypt=require('bcryptjs')
module.exports={
   addUser:(data)=>{
       return new Promise(async(resolve,reject)=>{
        try{
            const password=await bcrypt.hash(data.password,10)

            await User.create({
                name:data.name,
                email:data.email,
                password:password
            })
            resolve()

        }catch(err){
            console.log(err);
            reject()
        }
       })
   } 
}