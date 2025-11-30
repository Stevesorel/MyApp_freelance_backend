
const bcrypt = require("bcrypt")

const User = require("../models/user.js");

exports.login = async (request,response)=>
{
    const {email,password} = request.body;

    console.log(email,password);

    const user = await User.findOne({where:{email}});

    if(!user)
    {
        return response.status(404).json({error:"utilisateur introuvable"})
    }

    const valid = await bcrypt.compare(password,user.password)

    if(!valid)
    {
        return response.status(401).json({error:"Mot de passe incorrect"})
    }
    
    request.session.userId = user.id;

    response.json({message:"Connected",user:{id:user.id,email:user.email}})

}