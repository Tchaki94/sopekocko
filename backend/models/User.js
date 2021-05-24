// implantation de mongoose pour le schéma des données
const mongoose = require('mongoose');
const validator = require('validator');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true, validate: [validator.isEmail, { error: 'adresse mail non valide' }] },
    password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);


module.exports = mongoose.model('User', userSchema);