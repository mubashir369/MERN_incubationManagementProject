const express=require('express')
const app=express()
const userRouter=require('./routes/user')
const adminRouter=require('./routes/admin')
const cors=require('cors')
const mongoose=require('mongoose')
const db=mongoose.connection



try {
    mongoose.connect('mongodb://localhost:27017/incubationManagementProject')

    db.on('error', console.error.bind(console, 'connection error'));

    db.once('open', function () {
        console.log('Connected successfully');
    })
} catch (err) {
    console.log(err);
}
app.use(cors())
app.use(express.json())

app.use('/',userRouter)
app.use('/admin',adminRouter)


app.listen(9000,()=>{
    console.log("server start on port 9000");
})