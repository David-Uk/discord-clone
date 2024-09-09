const Joi = require('joi')

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12),
    password: Joi.string().min(6).max(12),
    email: Joi.string().email()
})
const loginSchema = Joi.object({
    password: Joi.string().min(6).max(12),
    email: Joi.string().email()
})

module.exports = { registerSchema, loginSchema }