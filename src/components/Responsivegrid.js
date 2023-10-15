import React from 'react';
import {Grid} from "@mui/material";

const Responsivegrid = () => {
  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={6} sm={6} md={9} lg={3} xl={2} sx={{background : "red"}} >Content A</Grid>
        <Grid item xs={6} sm={6} md={9} lg={3} xl={2} sx={{background : "yellow"}} >Content A</Grid>
        <Grid item xs={6} sm={6} md={9} lg={3} xl={2} sx={{background : "red"}} >Content A</Grid>
        <Grid item xs={6} sm={6} md={9} lg={3} xl={2} sx={{background : "yellow"}} >Content A</Grid>
      </Grid>
    </div>
  )
}

export default Responsivegrid
