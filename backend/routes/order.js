const express = require('express');
const router = express.Router();

const { newOrder, getSingleOrderAdmin, myOrders, allOrders, updateOrder, deleteOrder} = require('../controllers/order')

const {verifyToken, authorizeRoles} = require("../middlewares/authentication");


router.post('/neworder', newOrder)

// router.get('/order/:id', verifyToken, getSingleOrder)

router.get('/myorders', verifyToken, myOrders)

// admin routes
router.get('/admin/allorders', verifyToken, authorizeRoles('admin'), allOrders)

router.get('/order/:id', verifyToken, authorizeRoles('admin'), getSingleOrderAdmin)

router.put('/admin/order/:id', verifyToken, authorizeRoles('admin'), updateOrder)

//router.delete('/admin/order/:id', verifyToken, authorizeRoles('admin'), deleteOrder)

module.exports = router;