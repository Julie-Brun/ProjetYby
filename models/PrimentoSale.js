const mongoose = require('mongoose');

let PrimentoSaleSchema = mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artwork'
    },
    mobiSales: {
        salesPerMonth: {
            january: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            february: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            march: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            april: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            may: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            june: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            july: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            august: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            september: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            october: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            november: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            december: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            }
        },
        totalSales: {
            type: Number,
            lastUpdateAt: {
                type: Date
            }
        },
        totalPerTitle: {
            type: Number,
            lastUpdateAt: {
                type: Date
            }
        },
        publisherRoyalties: {
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
        publisherProfits: {
            type: Number,
            lastUpdateAt: {
                type: Date
            }
        }
    },
    ePubSales: {
        salesPerMonth: {
            january: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            february: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            march: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            april: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            may: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            june: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            july: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            august: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            september: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            october: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            november: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            },
            december: {
                unities: {
                    type: Number
                },
                CA: {
                    type: Number
                },
                lastUpdateAt: {
                    type: Date
                }
            }
        },
        totalSales: {
            type: Number,
            lastUpdateAt: {
                type: Date
            }
        },
        totalPerTitle: {
            type: Number,
            lastUpdateAt: {
                type: Date
            }
        },
        publisherRoyalties: {
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
        publisherProfits: {
            type: Number,
            lastUpdateAt: {
                type: Date
            }
        }
    }
});

module.exports = mongoose.model('PrimentoSale', PrimentoSaleSchema);