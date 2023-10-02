import React , {useState} from 'react'
import { AppBar, Button, Toolbar, Typography , Tabs , Tab } from "@mui/material"
const Navbar = () => {
    const [value , setvalue] = useState(0);
  return (
    <div>
        {/* Navbar */}
      <AppBar>
        <Toolbar>
        <Typography variant='h4'>Logo</Typography>
        <Tabs textColor='inherit' indicatorColor='secondary' value={value} onChange={(e , val)=>setvalue(val)}>
            <Tab label="Home"></Tab>
            <Tab label="About"></Tab>
            <Tab label="Contact"></Tab>
        </Tabs>
        <Button sx={{marginLeft : "auto"}} variant='contained' color='success'>SignIn</Button>
        </Toolbar>
      </AppBar>

      
    </div>
  )
}

export default Navbar
