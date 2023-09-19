const express = require('express')


const { userLogin, joinTheCult } = require('../controllers/UserController')

const router = express.Router()

// login route
router.post('/login', userLogin)

// signup route
router.post('/signup', joinTheCult)

module.exports = router