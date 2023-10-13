import React , {useState} from 'react'
import {Button , Modal , Box , Typography , Link} from "@mui/material";

const Modal1 = () => {
    const [open , setOpen] = useState(false);
  return (
    <div>
      <Button onClick={()=>setOpen(true)} variant='contained'>Open Modal</Button>
      <Modal open={open} onClose={()=>setOpen(false)}>
        <Box position="absolute" top="50%" left="50%">
            <Typography >This is a Modal</Typography>
            <Button onClick={()=>setOpen(false)} variant='contained'>Cancel</Button>
        </Box>
      </Modal>

      {/* Link */}
      <Link variant='h4' color="secondary" underline='always' href="https://facebook.com">NavLink</Link>
    </div>
  )
}

export default Modal1
