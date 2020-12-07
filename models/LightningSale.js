const mongoose = require('mongoose');

let LightningSaleSchema = mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artwork'
    },
    priceAllTaxesIncluded: {
        type: Number,
        lastUpdateAt: {
            type: Date
        }
    },
    priceWithoutTax: {
        type: Number,
        lastUpdateAt: {
            type: Date
        }
    },
    printingCost: {
        type: Number,
        lastUpdateAt: {
            type: Date
        }
    },
    salesPerMonth: [{
        january: {
            copiesNumber: {
                type: Number
            },
            lastUpdateAt: {
                type: Date
            }
        },
        february: {
            copiesNumber: {
                type: Number
            },
            lastUpdateAt: {
                type: Date
            }
        },
        march: {
            copiesNumber: {
                type: Number
            },
            lastUpdateAt: {
                type: Date
            }
        },
        april: {
            copiesNumber: {
                type: Number
            },
            lastUpdateAt: {
                type: Date
            }
        },
        may: {
            copiesNumber: {
                type: Number
            },
            lastUpdateAt: {
                type: Date
            }
        },
        june: {
            copiesNumber: {
                type: Number
            },
            lastUpdateAt: {
                type: Date
            }
        },
        july: {
            copiesNumber: {
                type: Number
            },
            lastUpdateAt: {
                type: Date
            }
        },
        august: {
            copiesNumber: {
                type: Number
            },
            lastUpdateAt: {
                type: Date
            }
        },
        september: {
            copiesNumber: {
                type: Number
            },
            lastUpdateAt: {
                type: Date
            }
        },
        october: {
            copiesNumber: {
                type: Number
            },
            lastUpdateAt: {
                type: Date
            }
        },
        november: {
            copiesNumber: {
                type: Number
            },
            lastUpdateAt: {
                type: Date
            }
        },
        december: {
            copiesNumber: {
                type: Number
            },
            lastUpdateAt: {
                type: Date
            }
        }
    }],
    totalSales: {
        copiesNumber: {
            type: Number
        },
        lastUpdateAt: {
            type: Date
        }
    },
    turnoverAllTaxesIncluded: {
        type: Number,
        lastUpdateAt: {
            type: Date
        }
    },
    turnoverWithoutTax: {
        type: Number,
        lastUpdateAt: {
            type: Date
        }
    },
    totalPrintingCost: {
        type: Number,
        lastUpdateAt: {
            type: Date
        }
    },
    distribution: {
        type: Number,
        lastUpdateAt: {
            type: Date
        }
    },
    booksellerMargin: {
        type: Number,
        lastUpdateAt: {
            type: Date
        }
    },
    miscellaneousCosts: {
        type: Number,
        lastUpdateAt: {
            type: Date
        }
    },
    copyrights: {
        type: Number,
        lastUpdateAt: {
            type: Date
        }
    },
    totalAddedValue: {
        type: Number,
        lastUpdateAt: {
            type: Date
        }
    },
    unitAddedValue: {
        type: Number,
        lastUpdateAt: {
            type: Date
        }
    }
});

module.exports = mongoose.model('LightningSale', LightningSaleSchema);