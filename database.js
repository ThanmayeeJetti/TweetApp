
const mongoose=require("mongoose")


class Database{
    constructor(){
        this.connect()
    }
   
    connect(){
        mongoose.connect("mongodb+srv://admin:admin@twitterclonecluster.xhk5mm3.mongodb.net/?retryWrites=true&w=majority")
    .then( ()=>{
        console.log("database connected succesfully")
    })
    .catch( (err)=>{
         console.log("database connection error"+err)
    })

    }
}

module.exports=new Database();