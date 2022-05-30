import React, { Fragment, useEffect, useState } from 'react'
import { Typography, Button } from '@mui/material'

import OtherProductsModal from '../components/_Atomic/OtherProductsModal'
import MenuItemModal from '../components/admin/MenuItemModal'

function TestPage() {
  const [openPopup, setOpenPopup] = useState(false)

  return (
    
      <><Button variant='contained' size='large' color='warning'
      onClick={() => { setOpenPopup(true) } }
    ></Button>
    
                   <MenuItemModal
                    title="Employee Form"
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                    
                >
                    <Typography variant='h2'>my anme is modal</Typography>
                </MenuItemModal>
    
    </>

    
  )
}

export default TestPage