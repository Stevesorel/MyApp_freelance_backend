
const Sequelize = require("sequelize")

const config = require('../config/config.js')['dev']

const instance = new Sequelize(config.database,config.username,config.password,{
    
    dialect:config.dialect,

    host:config.host
})

async function steve()
{
    return instance.authenticate()
}

steve().then(()=>{
    console.log("Connexion reussie")
}).catch(()=>{
    console.log("Connexion refuser")
})

module.exports = instance

