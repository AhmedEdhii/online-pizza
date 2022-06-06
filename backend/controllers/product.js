const Product = require('../models/product')
const User = require("../models/user")
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures')
const cloudinary = require('cloudinary')

//Add new product -- For Admins
exports.newProduct = catchAsyncErrors(async (req, res, next) => {

    var url;
    if (req.body.avatar != '/images/default.png') {
        const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: 'products',
            width: 800,
            crop: "scale"
        })
        url = result.secure_url;
    }

    req.body.createdBy = req.user._id;
    if (req.body.category === 'Pizzas') {
        const { name, description, small, regular, large, jumbo, category, activeState } = req.body;

        // console.log(req.body)

        const product = await Product.create({
            name,
            description,
            category,
            PizzaDetails: {
                size: {
                    small: small,
                    regular: regular,
                    large: large,
                    jumbo: jumbo
                },
            },
            product_status: activeState,
            url
        });
        //console.log(product)
        res.status(201).json({
            success: true,
            product
        })
    }
    else if (req.body.category === 'Beverages') {
        const { name, description, price, category, activeState } = req.body;
        const product = await Product.create({
            name,
            description,
            category,
            BeverageDetails: {
                price: price
            },
            product_status: activeState,
            url
        });
        res.status(201).json({
            success: true,
            product
        })
    }
    else if (req.body.category === 'Sauces') {
        const { name, description, price, category, activeState } = req.body;
        const product = await Product.create({
            name,
            description,
            category,
            SauceDetails: {
                price: price
            },
            product_status: activeState,
            url
        });
        res.status(201).json({
            success: true,
            product
        })
    }
})




// Get all products 
exports.getallProducts = catchAsyncErrors(async (req, res, next) => {

    if (req.user != null) {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            count: products.length,
            products
        })
    }
    else {
        const productsCount = await Product.countDocuments();

        const apiFeatures = new APIFeatures(Product.find({ product_status: "active" }), req.query)
            .search()

        let products = await apiFeatures.query;

        //apiFeatures.pagination(resPerPage)
        products = await apiFeatures.query;

        res.status(200).json({
            success: true,
            count: productsCount,
            //resPerPage,
            products
        })
    }
})


// Get single product details
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {

    if (req.user != null) {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            })
        }
        res.status(200).json({
            success: true,
            product
        })
    }
    else {
        const product = await Product.findOne({ $and: [{ _id: req.params.id }, { product_status: "active" }] })
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            })
        }
        res.status(200).json({
            success: true,
            product
        })
    }
})

//Update Product -- For Admins
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    //console.log(product)
    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }

    if (req.body.category === 'Pizzas') {
        const newProductData = {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            PizzaDetails: {
                size: {
                    small: req.body.small,
                    regular: req.body.regular,
                    large: req.body.large,
                    jumbo: req.body.jumbo
                },
            },
            product_status: req.body.status
        }
        // var url;
        // if (req.body.avatar != '/images/default.png') {
        //     const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        //         folder: 'products',
        //         width: 800,
        //         crop: "scale"
        //     })
        //     url = result.secure_url;

        //     newProductData.url = {
        //         url: result.secure_url || (product.url)
        //     }
        // }
        
        const product = await Product.findByIdAndUpdate(req.params.id, newProductData, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        //console.log(product)

        res.status(200).json({
            success: true,
            // product
        })

    }
    else if (req.body.category === 'Beverages') {
        const newProductData = {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            BeverageDetails: {
                price: req.body.price
            },
            product_status: req.body.status
        }
        // var url;
        // if (req.body.avatar != '/images/default.png') {
        //     const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        //         folder: 'products',
        //         width: 800,
        //         crop: "scale"
        //     })
        //     url = result.secure_url;

        //     newProductData.url = {
        //         url: result.secure_url || (product.url)
        //     }
        // }
        await Product.findByIdAndUpdate((req.params.id), newProductData, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        res.status(200).json({
            success: true
        })

    }
    else if (req.body.category === 'Sauces') {
        const newProductData = {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            SauceDetails: {
                price: req.body.price
            },
            product_status: req.body.status,
        }

        // var url;
        // if (req.body.avatar != '/images/default.png') {
        //     const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        //         folder: 'products',
        //         width: 800,
        //         crop: "scale"
        //     })
        //     url = result.secure_url;

        //     newProductData.url = {
        //         url: result.secure_url || (product.url)
        //     }
        // }
        await Product.findByIdAndUpdate((req.params.id), newProductData, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        //console.log(product)

        res.status(200).json({
            success: true
        })

    }
})


//Inactivate Product -- For Admins
exports.inactivateProduct = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }

    const prod = await Product.findByIdAndUpdate(req.params.id, { product_status: "inactive" }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product: prod
    })

})