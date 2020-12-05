const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Transfer = new Schema({
    fromid:{
        type: String
    },
    toid:{
        type: String
    },
    fromName:{
        type: String
    },
    toName:{
        type: String
    },
    amount:{
        type: Number
    }
});

module.exports = mongoose.model('Transfer', Transfer);