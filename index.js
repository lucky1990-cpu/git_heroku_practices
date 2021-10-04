const path = require('path')
const sockotio = require('socket.io')
const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)
const io =  sockotio(server)
require('./db/mongo')
const login = require('./model/login')
//const UserDetails = require('./model/UserDetails')
const multer = require('multer')
const { ObjectId } = require('bson')
const PublicDirectoryPath = path.join(__dirname,'./public')
app.use(express.static(PublicDirectoryPath))
app.use(express.json()) 
//app.use(userRoute)

const upload  = multer({

})

app.post("/picUpload", upload.single('avatar'), async(req,res)=>{
    console.log(req.file.buffer)
    console.log(req.file)
    console.log(req.body)
    // const oNewUser1  = new UserDetails(req.file.buffer)
    // try{
    //   await oNewUser1.save()
    //   callback(oNewUser1)
    //   console.log(oNewUser1)
    // }
    // catch(e){
    //    console.log(e)
    // }
})
io.on('connection',(socket)=>{
    console.log('connection establish between client and server')
    socket.on('signIn',({userid,password},callback)=>{
       console.log(userid)
       console.log(password)
      login.find({Email:userid}).then((data)=>{
        console.log(data)
        callback(data)
      }).catch((error)=>{
        console.log(error)
      })
    })
    // reterving UserDetails Information
    socket.on('UsersDetails',async(callback)=>{
      try{
      const userDetails = await UserDetails.find({})
      console.log(userDetails)
      callback(userDetails)
    }
    catch(e){
    }
    })
      socket.on('NewJoiner',async(userObj,callback)=>{
      const oNewUser  = new UserDetails(userObj)
      try{
        await oNewUser.save()
        callback(oNewUser)
        console.log(oNewUser)
      }
      catch(e){
        callback(e)

         console.log(e)
      }
    })
   
    socket.on('searchByName',async(name,callback)=>{
      console.log('name',name)
       try{
        const userDataSearchedByName = await UserDetails.find({name})
        callback(userDataSearchedByName)
        console.log('serched by name ',userDataSearchedByName)
       }
       catch(e){

       }
    })

    socket.on('searchByPhone',async(phone,callback)=>{
      console.log('phone no',phone)
      try{
        const userDataSearchedByPhone = await UserDetails.find({Mobile:phone})
        callback(userDataSearchedByPhone)
        console.log('serched by name ',userDataSearchedByPhone)
       }
       catch(e){

       }

    })
    socket.on('searchByEmail',async(Email,callback)=>{
     
      try{
        const userDataSearchedByEmail = await UserDetails.find({Email})
        callback(userDataSearchedByEmail)
        
       }
       catch(e){

       }

    })
    socket.on('SearchByID',async(_id,callback)=>{
      try{
        const userDataSearchedByID = await UserDetails.find({_id})
        callback(userDataSearchedByID)
        
      }catch(e){

      }
    })
    socket.on('searchByPaidDate',async(PaidDate,callback)=>{
      console.log(PaidDate)
       
      try{
        const userDataSearchedByDate = await UserDetails.find({PaidDate})
        callback(userDataSearchedByDate)
        
       }
       catch(e){

       }

    })

    socket.on('searchByRenewalDate',async(RenewalDate,callback)=>{
      try{
        const userDataSearchedByRenewalDate = await UserDetails.find({RenewalDate})
        callback(userDataSearchedByRenewalDate)
        
       }
       catch(e){

       }

    })

    socket.on('UserUpdate',async(oUserUpdate,callback)=>{
      console.log(oUserUpdate)
      const id =  { _id : new ObjectId(oUserUpdate._id)}
      console.log("id is",id)
      delete oUserUpdate._id
      const value = {$set:oUserUpdate}
      console.log(value)

      try{
        const userUpdateData = await UserDetails.updateOne(id,value)
        callback(userUpdateData)
        console.log(userUpdateData)
        
       }
       catch(e){
         console.log(e)
       }
    })
})
const port = process.env.PORT || 3000
// app.get('/',(req,res)=>{
//    res.send("testing app for git and heroku")
// })
server.listen(port,()=>{
  console.log(`Application is running ${port}`)
})
