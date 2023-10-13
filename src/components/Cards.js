import React , {useState} from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography} from "@mui/material"
const Cards = () => {
  const [open , setOpen] = useState(true);
  return (
    <div>
      <Card sx={{width : 300 , marginTop : 10}}>
        <CardMedia 
        component={'img'} 
        height={140} 
        image='https://cdn.pixabay.com/photo/2023/08/14/21/44/mountain-8190836_1280.jpg' 
        alt='test iamge'/>
        <CardContent>
            <Typography gutterBottom variant='h5' component={"div"}>
                Web Design
            </Typography>
            <Typography variant='body2'>lorem ipsum emit hello lelo kha ho a jao chle jao</Typography>
        </CardContent>
        <CardActions>
            <Button size='small' color='primary'>Share</Button>
            <Button size='small' onClick={()=>setOpen(true)} color='primary'>Delete</Button>
        </CardActions>

        <Dialog open={open} onClose={()=>setOpen(false)}>
            <DialogTitle>Are You sure</DialogTitle>
            <DialogContent>
                <DialogContentText>
                Are You Sure to delete This Product.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>setOpen(false)}>Cancel</Button>
                <Button>Delete</Button>
            </DialogActions>
        </Dialog>
      </Card>
    </div>
  )
}

export default Cards
