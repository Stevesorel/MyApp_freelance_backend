
const express = require('express')

const router = express.Router()

const connexion = require('../controllers/connexion')

const inscription = require('../controllers/inscription')

const compte = require('../controllers/compte')

const deconnexion = require('../controllers/deconnexion')


router.post('/register',inscription.register)
router.post('/login',connexion.login)
router.get('/account',compte.account)
router.post('/logout',deconnexion.logout)

module.exports = router 
