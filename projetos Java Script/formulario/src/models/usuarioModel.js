//o model fica responsável por conversar com o banco de dados, e representar os dados da aplicação
const  mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true,
        unique: true,
        trim: true, 
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 10
    },
    name:{
    type: String,
    }
})

const user = mongoose.model('login', LoginSchema)



module.exports = user;