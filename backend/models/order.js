const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        //required: true,
        ref: 'User'
    },
    deliveryaddress: {
        type: String,
        //required: true,
    },
    additionalInstructions: {
        type: String,
        //required: true,
    },
    orderItems: [
        {
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                //required: true
            },
            price: {
                type: Number,
                required: true
            },
            category: {
                type: String,
                //required: true
            },
            size: {
                type: String
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
            toppings: [
                {
                    _id: {
                        type: mongoose.Schema.Types.ObjectId,
                        required: true,
                        ref: 'Topping'
                    },
                    name: {
                        type: String,
                        required: true
                    },
                    price: {
                        type: Number,
                        required: true
                    },
                },
            ],
        }
    ],
    deliverycharges: {
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
                'Delivered'
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