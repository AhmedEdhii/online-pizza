const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [
        {
            product_name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            unit_price: {
                type: Number,
                required: true
            },
            product_id: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
            toppings: [
                {
                    topping_id: {
                        type: mongoose.Schema.Types.ObjectId,
                        required: true,
                        ref: 'Topping'
                    },
                    topping_name: {
                        type: String,
                        required: true
                    },
                    category: {
                        type: String,
                        required: true
                    },
                    unit_price: {
                        type: Number,
                        required: true
                    },
                },
            ],
        }
    ],
    itemsPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    deliveryCharges: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    paymentmethod: {
        type: String
    },
    orderDate: {
        type: Date
    },
    orderStatus: {
        type: String,
        required: true,
        enum: {
            values: [
                'Processing',
                'Confirmed',
                'onDelivery',
                'Delivered',
                'Cancelled',
                'Rejected'
            ],
            message: 'Incorrect Order Status'
        },
        default: 'Processing',
    },
    deliveredAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Order', orderSchema)