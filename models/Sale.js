const mongoose = require('mongoose');

let SaleSchema = mongoose.Schema({
    normalPriceSales: {
        copiesNumber: {
            type: Number
        },
        lastUpdateAt: {
            type: Date
        }
    },
    reducedPriceSales: {
        copiesNumber: {
            type: Number
        },
        lastUpdateAt: {
            type: Date
        }
    },
    costPriceSales: {
        copiesNumber: {
            type: Number
        },
        lastUpdateAt: {
            type: Date
        }
    },
    totalCopiesSold: {
        copiesNumber: {
            type: Number
        },
        lastUpdateAt: {
            type: Date
        }
    },
    lightningSales: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LightningSale'
    },
    primentoSales: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PrimentoSale'
    }
});

module.exports = mongoose.model('Sale', SaleSchema);