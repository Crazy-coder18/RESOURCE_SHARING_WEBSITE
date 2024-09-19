const mongoose = require("mongoose");
const { Schema } = mongoose
const ItemSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    name: {
        type: String,
        required: true
    },
    itemcategory: {
        type: String,
        required: true
    },
    imageitem: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    personname: {
        type: String,
        required: true
    },
    contact: {
        type:Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }

});

const Item=mongoose.model("Item",ItemSchema);
module.exports=Item