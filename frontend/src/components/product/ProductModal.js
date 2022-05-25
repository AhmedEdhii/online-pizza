// import React, { Fragment, useEffect, useState } from 'react'
// import { Modal, Button, Form } from "react-bootstrap";

// not using this rn

// const ProductModal = ({ flag, match }) => {
//     // console.log(flag)
//     const [show, setShow] = useState(false);
//     //setShow(true);
//     const handleClose = () => {
//         flag = false;
//         setShow(false);
//     }
//     return (
//         <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton>
//                 <Modal.Title>{product.name}</Modal.Title>
//                 {/* <Modal.Title>{product._id}</Modal.Title> */}
//             </Modal.Header>
//             <Modal.Body>
//                 <div>
//                     <h1>
//                         Rs. {product.PizzaDetails.size.small}
//                     </h1>
//                     <h1>
//                         Rs. {product.PizzaDetails.size.regular}
//                     </h1>
//                     <h1>
//                         Rs. {product.PizzaDetails.size.large}
//                     </h1>
//                     <h1>
//                         Rs. {product.PizzaDetails.size.jumbo}
//                     </h1>
//                 </div>
//                 <div>
//                     <h1>Extra Toppings</h1>
//                     {toppings && toppings.map(topping => (
//                         <h1>
//                             {topping.name}
//                         </h1>
//                     ))}
//                 </div>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={handleClose}>
//                     Close Modal
//                 </Button>
//             </Modal.Footer>
//         </Modal>
//     )
// }

// export default ProductModal