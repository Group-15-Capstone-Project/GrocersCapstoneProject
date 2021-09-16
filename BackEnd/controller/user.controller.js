let userModel = require("../model/user.model");

let signUp = async (request,response)=> {
    let user = request.body;    // receive the data from post method
    let userInfo = await userModel.findOne({userID:user.userID});
    if(userInfo==null){
        let result = await userModel.insertMany(user);
        response.send("Account created successfully");
    }else {
        response.send("fail to create an Account");
    }    
}
let signIn = async (request,response)=> {
    let user = request.body;    // receive the data from post method
    let userInfo = await userModel.findOne({userID:user.userID,userPassword:user.userPassword});
    if(userInfo!=null){
        response.send("Success");      
    }else {
        response.send("wrong credantials");
    }
}

module.exports={signIn,signUp}