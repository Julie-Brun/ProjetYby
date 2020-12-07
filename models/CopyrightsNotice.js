const mongoose = require('mongoose');

let CopyrightsNoticeSchema = mongoose.Schema({
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist'
    },
    artworks: [{
        title: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Artwork'
        },
        soldCopies: {
            type: Number
        },
        royalties: {
            type: Number
        },
        contributionToYBY: {
            type: Boolean,
            default: false
        },
        beginningOfTheYearStock: {
            type: Number
        },
        endOfTheYearStock: {
            type: Number
        },
        printedCopies: {
            type: Number
        },
        lostCopies: {
            type: Number
        }
    }]
});

module.exports = mongoose.model('CopyrightsNotice', CopyrightsNoticeSchema);