const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homecontroler')

//página para controlar as rotas

route.get('/', homeController.paginaInicial)

module.exports = route;
