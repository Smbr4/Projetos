//Trata a requisição do login.

const user = require('../models/usuarioModel');

exports.paginaLogin = (req, res, next) => {
    res.render('login')
};

exports.tratarDados = async (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    //consulta os dados de login
    try{
        const userE = await user.findOne({email}).exec();
        
        if (userE){
            if (userE.password === password){
                res.redirect('/home')
            }else{
                res.send(console.log('senha incorreta'))
            }
        }else{
            res.send('email incorreto')
        }
    } catch(error){
        console.log(error)
        res.send(console.log('falha na consulta'))
        return;
    }
    }


