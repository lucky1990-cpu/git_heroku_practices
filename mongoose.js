// const mongodB = require('mongodB')
// const mongoClient = mongodB.mongoClient;
// const  ObjectID = mongodb.ObjectId 

const {MongoClient ,  ObjectId } = require('mongodb')
const mongoUrl = 'mongodb://127.0.0.1:27017'
const dataBaseName = 'gym_data'
const id =  new ObjectId();

MongoClient.connect(mongoUrl,{useNewUrlParser: true },(error,client)=>{
    if(error){
       return
    }
    const db =  client.db(dataBaseName)

    //Create Data Base
    // Login home page validation
    db.collection('login_info').insertOne({
        _id:id,
       name:'lucky',
       phone:'9990716623',
       email:'chouhanluckysp@gmail.com',
       password:'12344@34' 
    },(error,result)=>{
        if(error){
         return console.log('Insert not possile in gym_database!')
        }
        console.log(result)

    })


    const findData = db.collection('login_info').find({name:'lucky'}).toArray()
    findData.then((result)=>{
     console.log(result)
    }).catch((error)=>{
     console.log(error)
    })

})
