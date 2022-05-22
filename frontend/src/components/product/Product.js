import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductModal from './ProductModal'
import { useAlert } from 'react-alert'
import { Modal, Button, Form } from "react-bootstrap";

const Product = ({ product }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const alert = useAlert();

    const addtocart = () => {
        alert.success("Added to cart!");
    }

    const loadmodal = () => {
        setShow(true);
        // <ProductModal flag = {show} match={product._id} />
        //console.log(show)
        console.log(product._id)
    }

    return (
        <Fragment>
            {product.category === 'Pizzas' && (
                <div className="container mt-5" style={{ maxWidth: "500px", height: "220px" }}>
                    <div className="card mb-1" style={{ maxWidth: "500px", height: "220px" }}>
                        <div className="row" style={{ height: "220px" }}>
                            <div className="col mt-4 txt-col flex-70">
                                <h5 id="card-title">
                                    <Link style={{ fontSize: "20px" }} to={`/product/${product._id}`}> {product.name}</Link>
                                </h5>
                                <p style={{ fontSize: "15px" }} className="card-text">Starting Price Rs {product.PizzaDetails.size.large}</p>
                                {/* <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">ADD TO CART</Link> */}
                            </div>
                            {/* <Modal match={product._id} /> */}
                            <div className="col p-0 text-right flex-auto" id="col" style={{ maxWidth: "500px", height: "220px" }}>
                                <i className="onlycover circlex icon icon-pos" style={{ height: "220px" }}>
                                    <div className="img container">
                                        <div className="image-wrapper2">
                                            <img
                                                className="card-img-top mx-auto"
                                                src="/images/pizza.jpg"
                                            />
                                        </div>
                                    </div>
                                </i>
                                <i onClick={() => { loadmodal() }} type="button" className="fa fa-plus flat-plus-icon foreground background"></i>
                                {/* <i onClick={() => { loadmodal() }} type="button" data-toggle="modal" data-target="#exampleModalCenter" className="fa fa-plus flat-plus-icon foreground background"></i> */}
                            </div>
                        </div>
                    </div>
                    {/* <ProductModal flag = {show} match={product._id} /> */}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{product._id}</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close Modal
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )
            }
            {product.category === 'Beverages' && (
                <div className="container mt-5" style={{ maxWidth: "500px", height: "220px" }}>
                    <div className="card mb-1">
                        <div className="row" style={{ height: "220px" }}>
                            <div className="col mt-4 txt-col flex-70">
                                <h5 id="card-title">
                                    <Link style={{ fontSize: "20px" }} to={`/product/${product._id}`}> {product.name}</Link>
                                </h5>
                                <p style={{ fontSize: "15px" }} className="card-text">Rs {product.BeverageDetails.price}</p>
                                {/* <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">ADD TO CART</Link> */}
                            </div>
                            <div className="col p-0 text-right flex-auto" id="col" style={{ maxWidth: "500px", height: "220px" }}>
                                <i className="onlycover circlex icon icon-pos" style={{ height: "220px" }}>
                                    <div className="img container">
                                        <div className="image-wrapper2">
                                            <img
                                                className="card-img-top mx-auto"
                                                src="/images/drink.jpg"
                                            />
                                        </div>
                                    </div>
                                </i>
                                <i type="button" onClick={() => { addtocart() }} className="fa fa-plus flat-plus-icon foreground background"></i>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            {product.category === 'Sauces' && (
                <div className="container mt-5" style={{ maxWidth: "500px", height: "220px" }}>
                    <div className="card mb-1">
                        <div className="row" style={{ height: "220px" }}>
                            <div className="col mt-4 txt-col flex-70">
                                <h5 id="card-title">
                                    <Link style={{ fontSize: "20px" }} to={`/product/${product._id}`}> {product.name}</Link>
                                </h5>
                                <p style={{ fontSize: "15px" }} className="card-text">Rs {product.SauceDetails.price}</p>
                                {/* <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">ADD TO CART</Link> */}
                            </div>
                            <div className="col p-0 text-right flex-auto" id="col" style={{ maxWidth: "500px", height: "220px" }}>
                                <i className="onlycover circlex icon icon-pos" style={{ height: "220px" }}>
                                    <div className="img container">
                                        <div className="image-wrapper2">
                                            <img
                                                className="card-img-top mx-auto"
                                                src="/images/sauce.jpg"
                                            />
                                        </div>
                                    </div>
                                </i>
                                <i type="button" onClick={() => { addtocart() }} className="fa fa-plus flat-plus-icon foreground background"></i>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </Fragment>
    )
}

export default Product