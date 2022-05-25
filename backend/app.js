const mongoose = require("mongoose")
const express = require("express")
const app = express()

const cloudinary = require('cloudinary')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const fileUpload = require('express-fileupload')
const cors = require("cors")
require("dotenv").config();



// connecting to mongodb
mongoose.connect(process.env.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("Database Connected!!")
}).catch(() => {
    console.log("Unable to connect to the database.")
})

// Setting up cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// use parsing middlewares
//app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(fileUpload());
app.use(cors())

// importing routes
const userRoutes = require("./routes/user")
const productRoutes = require("./routes/product")
const toppingRoutes = require("./routes/topping")
const dealRoutes = require("./routes/deal")
const orderRoutes = require("./routes/order")

// using routes 
app.use('/api', userRoutes)
app.use('/api', productRoutes)
app.use('/api', toppingRoutes)
app.use('/api', dealRoutes)
app.use('/api', orderRoutes)

const port = process.env.PORT || 8000

// starting the server
app.listen(port, () => {
    console.log(`Application is running at ${port}`)
})

 

