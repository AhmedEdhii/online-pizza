const Topping = require('../models/topping')
const User = require("../models/user")
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');


//Add new topping -- For Admins
exports.newTopping = catchAsyncErrors(async (req, res, next) => {
        req.body.createdBy = req.user._id;
        const topping = await Topping.create(req.body);
        // const { _id, name, price, category } = toppings;
        res.status(201).json({
            success: true,
            topping
        })
})

// Get all toppings 
exports.getallToppings = catchAsyncErrors(async (req, res, next) => {

    if (req.user != null) {
        const toppings = await Topping.find();
        res.status(200).json({
            count: toppings.length,
            success: true,
            toppings
        })
    }
    else {
        const toppings = await Topping.find({ topping_status: "active" });
        res.status(200).json({
            count: toppings.length,
            success: true,
            toppings
        })
    }
})


// Get single topping details
exports.getSingleTopping = catchAsyncErrors(async (req, res, next) => {

    if (req.user != null) {
        const topping = await Topping.findById(req.params.id);
        if (!topping) {
            return res.status(404).json({
                error: 'Topping not found'
            })
        }
        const { _id, name, price, category } = toppings;
        res.status(200).json({
            _id,
            name, 
            price,
            category
        })
    }
    else {
        const topping = await Topping.findOne({ $and: [{ _id: req.params.id }, { topping_status: "active" }] })
        if (!topping) {
            return res.status(404).json({
                error: 'Topping not found'
            })
        }
        const { _id, name, price, category } = topping;
        res.status(200).json({
            _id,
            name, 
            price,
            category
        })
    }
})

//Update topping -- For Admins
exports.updateTopping = catchAsyncErrors(async (req, res, next) => {

    let topping = await Topping.findById(req.params.id);

    if (!topping) {
        return res.status(404).json({
            success: false,
            error: 'Topping not found'
        })
    }

    topping = await Topping.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        topping
    })

})


//Inactivate topping -- For Admins
exports.inactivateTopping = catchAsyncErrors(async (req, res, next) => {

    const topping = await Topping.findById(req.params.id);

    if (!topping) {
        return res.status(404).json({
            success: false,
            error: 'Topping not found'
        })
    }

    const top = await Topping.findByIdAndUpdate(req.params.id, { topping_status: "inactive" }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        topping: top
    })

})