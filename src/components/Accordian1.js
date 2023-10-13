import React from 'react';
import {Accordion , AccordionSummary , AccordionDetails , Typography} from "@mui/material";

const Accordian1 = () => {
  return (
    <div>
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
    </div>
  )
}

export default Accordian1
