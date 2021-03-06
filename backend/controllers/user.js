const User = require("../models/user")
const { validationResult } = require('express-validator')
var jwt = require('jsonwebtoken')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const cloudinary = require('cloudinary')
const generateToken = require('../utils/jwtToken');

exports.signup = catchAsyncErrors(async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.array()[0].msg
        })
    }

    const { name, phonenumber, deliveryaddress, email, password, avatar } = req.body;

  
    if (req.body.avatar !== '') {
        const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: 'avatars',
            width: 800,
            crop: "scale"
        })
        const user = new User({
            name,
            phonenumber,
            email,
            deliveryaddress,
            password,
            avatar: {
                public_id: result.public_id,
                url: result.secure_url
            }
        })
        user.save((err, newuser) => {
            if (err) {
                return res.status(400).json({
                    error: "Error!"
                })
            }

            generateToken(newuser, 200, res)

           
        })

    }
    else {
        const user = new User({
            name,
            phonenumber,
            deliveryaddress,
            email,
            password
        })
        user.save((err, newuser) => {
            if (err) {
                return res.status(400).json({
                    error: "Error!"
                })
            }
            generateToken(newuser, 200, res)
            
        })
    }
})


exports.signin = (req, res) => {
    const { email, password } = req.body

    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "Email Address not found"
            })
        }
        if (user.account_status === "inactive") {
            return res.status(400).json({
                error: "This account has been deleted"
            })
        }
        // check if user's email and password are correct       
        if (!user.authenticate(password)) {
            return res.status(400).json({
                error: "Email Address or Password is incorrect"
            })
        }

        generateToken(user, 200, res)

       
    })
}

exports.signout = (req, res) => {
    // res.clearCookie("token")
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    //req.session = null
    return res.json({
        success: true,
        message: "User signed out successfully."
    })
}

// View your Profile
exports.getprofile = catchAsyncErrors(async (req, res, next) => {
    
    if (req.user) {
        // console.log("hello get profile")
        User.findOne({ _id: req.user._id }, (err, user) => {
            const { _id, name, email, phonenumber, deliveryaddress, role, createdAt, avatar } = user
            return res.status(200).json({
                message: "success",
                user: {
                    _id,
                    name,
                    email,
                    phonenumber,
                    deliveryaddress,
                    role,
                    createdAt,
                    avatar
                }
            })
        })
    }
})

// Update your profile  
exports.updateProfile = catchAsyncErrors(async (req, res) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        deliveryaddress: req.body.deliveryaddress
    }


    //console.log(req.body)
    console.log('*****************')

    
    // Update avatar
    //if (req.body.avatar !== '') {


    const user = await User.findById(req.user._id)
    console.log(user)
    console.log('-------------------')



if (req.body.avatar) {

        var image_id = user.avatar.public_id;
        if (image_id) {
            console.log("Before: " + user.avatar.public_id)
            console.log("After:" + user.avatar.public_id)
            const resp = await cloudinary.v2.uploader.destroy(image_id);
        }

        const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: 'avatars',
            width: 800,
            crop: "scale"
        })
        console.log("here " + result.public_id)

        newUserData.avatar = {
            public_id: result.public_id,
            url: result.secure_url
        }
    }


    user1 = await User.findByIdAndUpdate(req.user._id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    console.log(user1)

    res.status(200).json({
        success: true
    })

})

// Update / Change password   =>  /api/password/update
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user._id).select('+password');

    // Checks previous password of user
    const isMatched = await user.authenticate(req.body.oldPassword)
    if (!isMatched) {
        return res.status(404).json({
            error: 'Old password is incorrect'
        })
    }

    user.password = req.body.password;
    await user.save();

    generateToken(user, 200, res)
})

// Delete your account - For any user
exports.deleteYourAccount = catchAsyncErrors(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    }
    updateduser = await User.findByIdAndUpdate(req.user._id, { account_status: "inactive" }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "Account Deleted Successfully"
        //updateduser
    })
})


// Update user profile -- For Admins
exports.updateUser = (req, res) => {

    User.findOneAndUpdate(
        { $and: [{ _id: { $eq: req.params.id } }, { role: "user" }] }, // Find one id equals to id in params
        req.body, // data to be updated
        {
            new: true,
            runValidators: true,
            useFindAndModify: false
        }
    )
        .then(user => {
            if (!user) {
                return res.status(200).json({
                    message: "You cannot update an admin"
                })
            }
            return res.status(200).json({
                success: true,
                user
            })
        })
        .catch(error => {
            return res.status(500).json(error);
        });
}

// get all users -- For Admins
exports.getAllUsers = (req, res) => {
    User.find()
        .then(users => {
            // let type = typeof users;
            // console.log(type)
            res.status(200).json({
                success: true,
                users
            })
        })
        .catch(error => {
            return res.status(500).json(error);
        });
}

// Get user details -- For admins
exports.getUserDetails = (req, res) => {

    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    message: "User not found"
                });
            }
            return res.status(200).json({
                success: true,
                user
            })
        })
        .catch(error => {
            return res.status(500).json(error);
        });
}


// Deactivate a user -- For Admins
exports.deactivateUser = catchAsyncErrors(async (req, res) => {

    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    }
    if (user.role == "user") {
        const updateduser = await User.findByIdAndUpdate(req.params.id, { account_status: "inactive" }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        res.status(200).json({
            success: true,
            user: updateduser
        })
    }
    else {
        return res.status(200).json({
            message: "You cannot update an admin"
        })
    }
})


// Update any user's profile 
exports.updateAnyUser = (req, res) => {
    const { name, phonenumber, email, role } = req.body;
    User.findOneAndUpdate(
        { $and: [{ _id: { $eq: req.params.id } }, { $or: [{ role: "user" }, { role: "admin" }] }] }, // Find one id equals to id in params
        { name, phonenumber, email, role }, // data to be updated
        { new: true, useFindAndModify: false } // to mongoose returns the updated document
    )
        .then(user => {
            if (!user) {
                return res.status(200).json({
                    message: "You cannot update a superadmin"
                })
            }
            return res.status(200).json({
                success: true,
                user
            })
        })
        .catch(error => {
            return res.status(500).json(error);
        });
}

// Deactivate any user
exports.deactivateAnyUser = (req, res) => {
    User.findOneAndUpdate(
        { $and: [{ _id: { $eq: req.params.id } }, { $or: [{ role: "user" }, { role: "admin" }] }] }, // Find one id equals to id in params and role equal to user
        { account_status: "inactive" }, // data to be updated
        { new: true, useFindAndModify: false } // to mongoose returns the updated document
    )
        .then(user => {
            if (!user) {
                return res.status(200).json({
                    message: "You cannot update a superadmin"
                })
            }
            res.status(200).json({
                success: true,
                user
            })
        })
        .catch(error => {
            return res.status(500).json(error);
        });
}