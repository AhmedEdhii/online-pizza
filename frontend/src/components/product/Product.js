import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <Fragment>
            {product.category === 'Pizzas' && (
                <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                    <div>
                        <img
                            className="card-img-top mx-auto"
                            src="/images/pizza.jpg"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                <Link style={{ fontSize: "20px" }} to={`/product/${product._id}`}> {product.name}</Link>
                            </h5>
                            <p style={{ fontSize: "15px" }} className="card-text">Starting Price Rs {product.PizzaDetails.size.large}</p>
                            <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">ADD TO CART</Link>
                        </div>
                    </div>
                </div>)}
            {product.category === 'Beverages' && (
                <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                    <div>
                        <img
                            className="card-img-top mx-auto"
                            src="/images/drink.jpg"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                <Link style={{ fontSize: "20px" }} to={`/product/${product._id}`}> {product.name}</Link>
                            </h5>
                            <p style={{ fontSize: "15px" }} className="card-text">Rs {product.BeverageDetails.price}</p>
                            <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">ADD TO CART</Link>
                        </div>
                    </div>
                </div>)}
            {product.category === 'Sauces' && (
                <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                    <div>
                        <img
                            className="card-img-top mx-auto"
                            src="/images/sauce.jpg"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                <Link style={{ fontSize: "20px" }} to={`/product/${product._id}`}> {product.name}</Link>
                            </h5>
                            <p style={{ fontSize: "15px" }} className="card-text">Rs {product.SauceDetails.price}</p>
                            <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">ADD TO CART</Link>
                        </div>
                    </div>
                </div>)}
        </Fragment>
    )
}

export default Product