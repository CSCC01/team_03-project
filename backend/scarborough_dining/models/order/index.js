const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    menuItemID: {
        type: Schema.ObjectId,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageURL: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    cuisineTypes: {
        type: [String],
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    userGoogleId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}); 
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;