const express = require('express')
const { controller } = require('../controllers/auth/authController')
const { registerSchema, loginSchema } = require('../validator/authValidator')
// const { valid } = require('joi')
const validator = require('express-joi-validation').createValidator({})

const router = express.Router()

router.post('/register', validator.body(registerSchema), controller.register)
router.post('/login', validator.body(loginSchema), controller.login)

module.exports = router;