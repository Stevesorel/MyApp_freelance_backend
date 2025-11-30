

const User = require('../models/user.js')

exports.account = async(request,response)=>{
    if(!request.session.userId)
    {
        return response.status(401).json({error:"Non connecte"})
    }
    const user = await User.findByPk(request.session.userId,{
        attributes:["id","email"]
    })

    const { password, ...userwithoutPassword } = user.get({plain:true});

    response.json({
        message:"Bienvenu sur votre compte",
        user:userwithoutPassword
    });
}