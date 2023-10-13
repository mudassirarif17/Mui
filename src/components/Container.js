import React from 'react';
import {Container , Typography} from "@mui/material";

const Container1 = () => {
  return (
    <div>
      <Container sx={{background : "red"}} maxWidth="xs">
        <Typography variant='body2'>This is Xs</Typography>
      </Container>
      <Container sx={{background : "red"}} maxWidth="sm">
        <Typography variant='body2'>This is Sm</Typography>
      </Container>
      <Container sx={{background : "red"}} maxWidth="md">
        <Typography variant='body2'>This is MD</Typography>
      </Container>
      <Container sx={{background : "red"}} maxWidth="lg">
        <Typography variant='body2'>This is LG</Typography>
      </Container>
      <Container sx={{background : "red"}} maxWidth="xl">
        <Typography variant='body2'>This is XL</Typography>
      </Container>
    </div>
  )
}

export default Container1
