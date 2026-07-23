const ejs = require('ejs');

exports.paginaInicial = (req, res, next) => {
    res.render('index')
    next();
}