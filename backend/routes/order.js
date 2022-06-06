const express = require('express');
const router = express.Router();

const { newOrder, getSingleOrder, myOrders, allOrders, mylatestOrders, updateOrder, deleteOrder} = require('../controllers/order')

const {verifyToken, authorizeRoles} = require("../middlewares/authentication");


router.post('/neworder', newOrder)

router.get('/myorder', verifyToken, mylatestOrders)

router.get('/myorders', verifyToken, myOrders)

router.get('/order/:id', verifyToken, getSingleOrder)

// admin routes
router.get('/admin/allorders', verifyToken, authorizeRoles('admin'), allOrders)

router.put('/admin/order/:id', verifyToken, authorizeRoles('admin'), updateOrder)

router.delete('/admin/order/', verifyToken, authorizeRoles('admin'), deleteOrder)

module.exports = router;