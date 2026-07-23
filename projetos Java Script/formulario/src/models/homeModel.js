const { default: mongoose } = require('mongoose');

const HomeSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    }
})

const homeModel = mongoose.model('home', HomeSchema)

module.exports = homeModel;