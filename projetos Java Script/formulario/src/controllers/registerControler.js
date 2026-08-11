const user = require("../models/usuarioModel")

exports.renderPage = (req, res) => {
    res.render('register')
}

exports.verificaUser = async (req, res) =>{
    const userReq = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    
    const userConsult = await user.findOne({email: userReq.email}).exec()

    if(userConsult === null){
        await cadastraUser(userReq);
        res.redirect('/')
    }else{
        res.send(console.log('usuario existe'))
        res.redirect('/')
    }
}

cadastraUser = async (userReq) => {
    await user.create(userReq)  
}

