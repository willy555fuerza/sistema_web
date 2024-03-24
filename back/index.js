/*****************conection 4 servidor*********************/

const express = require ('express')
const server = express()
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser');
const routerProductos = require('./src/routes/index')
const routeruser = require('./src/routes/userrouter')

const PORT = process.env.PORT || 3000

server.use((req,res , next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    //res.setHeader("Access-Control-Allow-Origin",'http://127.0.0.1:5500')
    res.setHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE")
    res.setHeader("Access-Control-Allow-Headers","X-Requested-With, content-type")
    res.setHeader("Access-Control-Allow-Credentials",true)
    next()
})

server.get ('/', (req, res) => {
    res.send('Api tienda')
})
server.use('/api', routerProductos)

server.use(bodyParser.json());
server.use('/api', routeruser )

server.listen(PORT,() =>{
    console.log(`servidor corriendo en http://localhost:${PORT}`);
})
