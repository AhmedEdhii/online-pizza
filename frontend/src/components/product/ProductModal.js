// import React, { Fragment, useEffect, useState } from 'react'
// import { Modal, Button, Form } from "react-bootstrap";

// not using this rn

// const ProductModal = ({ flag, match}) => {
//   // console.log(flag)
//   const [show, setShow] = useState(false);
//   //setShow(true);
//   const handleClose = () => {
//     flag = false;
//     setShow(false);
//   }
//   return (
//     <Modal show={flag} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>{match}</Modal.Title>
//       </Modal.Header>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close Modal
//         </Button>
//       </Modal.Footer>
//     </Modal>
//     // <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//     //   <div class="modal-dialog modal-dialog-centered" role="document">
//     //     <div class="modal-content">
//     //       <div class="modal-header">
//     //         <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
//     //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//     //           <span aria-hidden="true">&times;</span>
//     //         </button>
//     //       </div>
//     //       <div class="modal-body">
//     //         {match}
//     //       </div>
//     //       <div class="modal-footer">
//     //         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//     //         <button type="button" class="btn btn-primary">Save changes</button>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//   )
// }

// export default ProductModal