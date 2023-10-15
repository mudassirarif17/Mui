import React from 'react';
import {Container , Accordion , AccordionSummary , AccordionDetails , Typography , Autocomplete, TextField} from "@mui/material";

const Accordian1 = () => {
  const courses = ["Mern" , "React" , "Node" , "Express"];

  return (
    <div>
      <Container>
      <Accordion>
        <AccordionSummary expandIcon={">"}>
            <Typography variant='h6'>
                What is Mern Stack
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, molestiae placeat ratione fugiat minima exercitationem amet magnam vel quia unde.</Typography>
        </AccordionDetails>
      </Accordion>
      </Container>

      {/* Auto Complete */}
      <Autocomplete 
      options={courses}
      renderInput={(params)=>(
        <TextField {...params} label="Select a course"/>
      )}/>
    </div>
  )
}

export default Accordian1
