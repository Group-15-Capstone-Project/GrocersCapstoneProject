let mongoose = require("mongoose");

mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    userID: {type:String,unique:true},
    email:{type:String},
    userPassword:{type:String},
    dob:{type:Date},
    phoneNo:{type:Number},
    address:{type:String}
    

});

let userModel = mongoose.model("user",userSchema);

module.exports = userModel;
