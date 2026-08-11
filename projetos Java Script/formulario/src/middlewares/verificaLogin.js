exports.verificaEmail = (req, res, next) => {
    const email = req.body.email;

    if(!email){
        res.status(401).send('por favor preencha o email')
    }else{
        next();
    }
}