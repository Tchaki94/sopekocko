// Exportation de mongoose et schéma de données
const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true, maxlength: [15] },
    manufacturer: { type: String, required: true, maxlength: [30] },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true, maxlength: [30] },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, required: false, default: 0 },
    dislikes: { type: Number, required: false, default: 0 },
    usersLiked: { type: [String], required: false },
    usersDisliked: { type: [String], required: false },
  });

module.exports = mongoose.model('Sauce', sauceSchema);