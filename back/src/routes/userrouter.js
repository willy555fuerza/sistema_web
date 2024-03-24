/*****************conection 3*********************/

const express = require('express')
const routeruser = express.Router()
const Token = require('../controller/token')

// Rutas relacionadas con la autenticación de usuarios
routeruser.post('/login', Token.token);


module.exports = routeruser