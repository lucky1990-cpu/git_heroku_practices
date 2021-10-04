const mongoose =  require('mongoose')
const validator = require('validator')
const login =  mongoose.model('login_Data',
{
    name:{type:String ,  trim :true},
    Mobile:{type :Number, default:0, validate(value){
      if(value<0){
       throw new Error("Negitive age is not allowed")
      }
    }},
    Email:{type:String, required:true, validate(value){

        if(!validator.isEmail(value)){

            throw new Error("Email is not valid formate")

        }

    }},
    password:{type:String, required:true,trim:true,minLength:7}


}
)

//Create Insitance of DB

// const me = new login( 
//     {
//         name:'Lucky',
//         Mobile:30,
//         Email:'chouhanluckysap@gmail.com',
//         password:'124342334'

// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//   console.log("Error", error);
// })

module.exports = login