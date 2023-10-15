import React , {useState} from 'react';
import {Button , Drawer , List , ListItemButton , ListItemText , Snackbar , Alert , CircularProgress , LinearProgress , Rating , Typography , IconButton } from "@mui/material";
import { AddReaction } from '@mui/icons-material';

const DrawerMenu = () => {
    const [open , setOpen] = useState(false);
    const courses = ["Mern" , "NEXT JS" , "REACTJS" , "PERN"];
    const [value , setvalue] = useState(0);

  return (
    <div>
      <Button variant='contained' onClick={()=>setOpen(true)}>Open</Button>
      <Drawer open={open} onClose={()=>setOpen(false)}>
        <List>
            {
                courses.map((course)=>(
                    <ListItemButton onClick={()=>setOpen(false)}>
                        <ListItemText primary={course}></ListItemText>
                    </ListItemButton>
                ))
            }
        </List>
      </Drawer>
      <br/>

      {/* SnackBar */}
      {/* <Snackbar open={true} message="This is a message"/> */}
      <Snackbar open={true} autoHideDuration={2000} >
        <Alert severity='info'>
            This is alert in snack bar
        </Alert>
      </Snackbar>

      {/* Circular  progress bar */}
      <CircularProgress color='secondary' value={10}></CircularProgress>
     
     {/* Linear progress bar */}
      <br/>
      <LinearProgress/>
     <br/>

      {/* Rating */}
      <Rating value={value} onChange={(e , val)=>(setvalue(val))} size="large" precision={0.5}/>
      {value > 0 ? <Typography>Rated : {value}  stars</Typography> : ""}
      
      <br />
     {/* Icon Button */}
    <IconButton onClick={()=> alert("Icon Btn")}>
        <AddReaction color='secondary'/>
    </IconButton>


    </div>
  )
}

export default DrawerMenu
