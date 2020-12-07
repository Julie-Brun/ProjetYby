const mongoose = require('mongoose');

let ArtworkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please, add a name.']
    },
    type: {
        type: String,
        required: [true, 'Please, select a type.']
    },
    normalPrice: {
        type: Number,
        required: [true, 'Please, add a normal price.']
    },
    reducedPrice: {
        type: Number,
        required: [true, 'Please, add a reduced price.']
    },
    costPrice: {
        type: Number,
        required: [true, 'Please, add a cost price.']
    },
    percentageOfCopyright: {
        type: Number,
        required: [true, 'Please, add a percentage of copyright.']
    },
    picture: {
        type: String
    },
    artists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist'
    }],
    stock: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stock'
    },
    sales: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sale'
    }
});

module.exports = mongoose.model('Artwork', ArtworkSchema);