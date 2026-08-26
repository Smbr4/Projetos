const express = require('express')
const route = express.Router()
const homeControler = require('./src/controllers/homecontroler')
const loginControler = require('./src/controllers/loginController')
const registerControler = require('./src/controllers/registerControler')

const  verificaLogin= require('./src/middlewares/verificaLogin')

//página para controlar/definir as rotas

//login
route.get('/', loginControler.paginaLogin)
route.post('/', verificaLogin.verificaEmail)
route.post('/', loginControler.tratarDados)


//cadastro
route.get('/register',  registerControler.renderPage)
route.post('/register', registerControler.verificaUser)

//home
route.get('/home', homeControler.paginaInicial)

module.exports = route;
