
const express = require('express')

const session = require('express-session')

const cookieParser = require('cookie-parser')

const config = require("./config/config")['dev']

const authroutes = require('./route/authroutes')

const app = express()

app.use(express.json());

app.use(cookieParser());

app.use(
    session({
        secret:config.secretKey,
        resave:false,
        saveUninitialized:false,
        cookie:{secure:false}
    })
)

const cors = require("cors");

app.use(cors({
  origin: "http://10.182.199.217:5173",
  credentials: true
}));

app.use('/api/auth',authroutes);

app.listen(process.env.PORT || 4000,()=>{
    console.log(`Serveur demarrer sur http://10.182.199.217:${process.env.PORT || 4000}`);
})
