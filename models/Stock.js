const mongoose = require('mongoose');

let StockSchema = mongoose.Schema({
    inStock: {
        copiesNumber: {
            type: Number
        },
        lastUpdateAt: {
            type: Date
        }
    },
    Order: {
        isOrdered: {
            type: Boolean
        },
        copiesOrdered: {
            type: Number
        },
        date: {
            type: Date
        }
    },
    lostCopies: {
        copiesNumber: {
            type: Number
        },
        lastUpdateAt: {
            type: Date
        }
    },
    inventory: {
        copiesNumber: {
            type: Number
        },
        date: {
            type: Date
        }
    },
    addition: {
        copiesNumber: {
            type: Number
        },
        lastUpdateAt: {
            type: Date
        }
    },
    printedCopies: {
        copiesNumber: {
            type: Number
        },
        lastUpdateAt: {
            type: Date
        }
    },
    events: [{
        name: {
            type: String
        },
        copiesNumber: {
            type: Number
        },
        date: {
            type: Date
        }
    }]
});

module.exports = mongoose.model('Stock', StockSchema);