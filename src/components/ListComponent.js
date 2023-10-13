import React from 'react';
import {List , ListItem , ListItemButton , ListItemText} from "@mui/material";

const ListComponent = () => {
    const courses = ["MERN" , "React" , "Express" , "Node"];
  return (
    <div>
      <List sx={{width : 250 , background : "gray"}}>
            <ListItemButton>{">"}</ListItemButton>
        {courses.map((course)=>(<ListItem>
            <ListItemText primary={course}/>
        </ListItem>))}
        
      </List>
    </div>
  )
}

export default ListComponent
