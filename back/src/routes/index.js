/*****************conection 3*********************/

const express = require('express')
const router = express.Router()
const Productos = require('../controller/index')

router.get('/productos',Productos.getAll)
router.get('/productos/:id',Productos.getByID)

module.exports = router