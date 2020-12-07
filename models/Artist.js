const mongoose = require('mongoose');

let ArtistSchema = new mongoose.Schema({
    lastName: {
        type: String,
        required: [true, 'Please, add a last name.']
    },
    firstName: {
        type: String,
        required: [true, 'Please, add a first name.']
    },
    useName: {
        type: String,
        required: [true, 'Please, add a use name.']
    },
    pronouns: {
        type: [String],
        required: [true, 'Please, add, at least, one pronoun.']
    },
    email: {
        type: String,
        required: [true, 'Please, add an email.']
    },
    specialties: {
        type: [String],
        required: [true, 'Please, add, at least, one specialty.']
    },
    payments: {
        type: [String],
        required: [true, 'Please, choose, at least, one option.']
    },
    languages: {
        type: [String],
        required: [true, 'Please, choose, at least, one option.']
    },
    artworks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artwork'
    }],
    copyrightsNotice: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CopyrightsNotice'
    }],
    copyrights: [{
        total: {
            type: Number
        },
        toPay: {
            type: Number
        },
        paid: {
            type: Boolean,
            default: false
        },
        fees: {
            type: Number
        },
        year: {
            type: Date
        }
    }]
});

module.exports = mongoose.model('Artist', ArtistSchema);