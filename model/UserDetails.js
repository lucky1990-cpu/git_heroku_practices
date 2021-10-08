const mongoose =  require('mongoose')
const validator = require('validator')
const UserDetails =  mongoose.model('UsersDetails',
{
    name:{type:String ,  trim :true},
    FatherName:{type:String},
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
    Address:{type:String},
    AadharNumber:{type:String},
    joiningDate:{type:String,required:true},
    PaidDate:{type:String,required:true},
    RenewalDate:{type:String,required:true},

}
)

// const me = new UserDetails( 
//     {
//         name:'Rehaan',
//         Mobile:9999349,
//         Email:'chouhanluckysap@gmail.com',
//         Address:'patna',
//         AadharNumber:'121232',
//         joiningDate:'01-12-1990',
//         PaidDate:'01-12-1990',
//         RenewalDate:'01-12-1990'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//   console.log("Error", error);
// })
module.exports = UserDetails