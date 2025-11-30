
const instance = require("../database/database")

const { DataTypes } = require("sequelize")

const user = instance.define("User",{

    name:{
        type:DataTypes.STRING,
        allowNull:false,
        field:'name'
    },

    telephone:
    {
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"telephone"    
    },
    site:
    {
        type:DataTypes.STRING,
        allowNull:false,
        field:"site"
    },
    desription:
    {
        type:DataTypes.STRING,
        allowNull:false,
        field:"description"
    },
    email:
    {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        field:"email"
    }
})

instance.sync({alter:true})

module.exports = user

