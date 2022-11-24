import React from 'react';
import FilterButton from './FilterButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';

const Status = (props) => {
  const { setStatus, setPageNumber } = props;

  const statusList = ['Alive', 'Dead', 'Unknown'];

  return (
    <Accordion sx={{ backgroundColor: '#C0C0C0', color: '#000' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: '#000' }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography component={'span'} sx={{ fontWeight: 'bold' }}>
          Status
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component={'span'}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              {statusList.map((element, index) => (
                <FilterButton
                  key={index}
                  action={setStatus}
                  setPageNumber={setPageNumber}
                  element={element}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Status;
