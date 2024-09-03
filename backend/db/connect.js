const mongoose=require("mongoose");

const ConnectToMongo = () => {
    mongoose.connect("mongodb://localhost:27017/resourcesharingweb", { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('connected  to  mongo successfully');
    
}
module.exports=ConnectToMongo;