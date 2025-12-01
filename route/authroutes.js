
const express = require('express')

const router = express.Router()

const inscription = require('../controllers/inscription')

router.post('/command',inscription.register)

module.exports = router 
