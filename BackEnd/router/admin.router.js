let userModel = require("../model/user.model");

let signIn = async (request,response)=> {
    let user = request.body;    // receive the data from post method
    let userInfo = await userModel.findOne({email:user.email,password:user.password});
    if(userInfo!=null){
        response.send("Success");      
    }else {
        response.send("InValid username or password");
    }
}

module.exports={signIn,signUp}