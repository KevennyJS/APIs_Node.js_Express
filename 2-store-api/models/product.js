const mongoose = require('mongoose')

const productSchrema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O nome do produto precisa ser preenchido']
    },
    price: {
        type: Number,
        required: [true, 'O valor do produto precisa ser preenchido']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        }
    }
})

module.exports = mongoose.model('Product', productSchrema)