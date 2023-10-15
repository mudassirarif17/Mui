import React from 'react';
import {List , ListItem , ListItemButton , ListItemText} from "@mui/material";

const ListComponent = () => {
    const courses = ["MERN" , "React" , "Express" , "Node"];
  return (
    <div>
      <List>
            {
                courses.map((course)=>(
                    <ListItemButton >
                        <ListItemText primary={course}></ListItemText>
                    </ListItemButton>
                ))
            }
        </List>
    </div>
  )
}

export default ListComponent
