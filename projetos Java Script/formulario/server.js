require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.CONECTIONSTRING)
.then(()=> {
        app.emit('pronto')
    }
).catch((e) => console.log(e))


//configurando as rotas
const rotes = require('./routes')
const path= require('path');
const { error } = require('console');
const { connect } = require('http2');

app.use(express.urlencoded({extended:true}))  //interpreta os dados do formulário html e coloca no body
app.use(express.static(path.resolve(__dirname, 'public')))


//códigos para carregar os templates
app.set('views', path.resolve(__dirname , 'src', 'views'))
app.set('view engine', 'ejs')

app.use(rotes)

app.on('pronto', () => {
    app.listen(3000, () =>{
    console.log('http://localhost:3000');
})  
})

