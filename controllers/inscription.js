
const bcrypt = require('bcrypt')

const User = require('../models/user')

//inscription

exports.register = async (request,response)=>
{
    const { name,email,telephone,site,description } = request.body;

    if(!email||!name||!telephone||!site||!description)
    {
        console.log(request.body)
        return response.status(400).json({error:"Champs vide"});
    }
    console.log(email,name,telephone,site,description)
    try
    {
        const user = await User.create({name,email,telephone,site,description});
        response.json({message:"Utilisateur cree",user:{id:user.id,name:user.name,email:user.email,telephone:user.telephone,site:user.site,description:user.description }})
        console.log(request.body)
    }
    catch(err)
    {
        response.status(400).json({error:"Email deja utiliser"})
        console.log(request.body)
    }

}

