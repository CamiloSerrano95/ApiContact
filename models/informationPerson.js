const mongoose = require('mongoose');

const InformationPersonSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    telephone: Number
});

module.exports = mongoose.model('InformationPerson', InformationPersonSchema);