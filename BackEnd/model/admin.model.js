let mongoose = require("mongoose");

mongoose.pluralize(null);

let adminSchema = mongoose.Schema({
    user: {type:String,unique:true},
    pass: {type:String}
})

let adminModel = mongoose.model("Admin", adminSchema);

module.exports=adminModel;