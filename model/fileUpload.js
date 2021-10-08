const mongoose =  require('mongoose')
const validator = require('validator')
const fileUpload =  mongoose.model('FileUpload_Data',
{
    file_id:{type:String},

    avatar:{type:Buffer}

})

module.exports = fileUpload

