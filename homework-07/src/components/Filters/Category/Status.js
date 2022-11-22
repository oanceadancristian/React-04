import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterButton from './FilterButton';

const Status = (props) => {
  const { setStatus, setPageNumber } = props;

  const statusList = ['Alive', 'Dead', 'Unknown'];

  return (
    <Accordion
      expanded={true}
      sx={{ backgroundColor: '#3c3e44', color: '#fff' }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Status</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {statusList.map((element, index) => (
            <FilterButton
              action={setStatus}
              setPageNumber={setPageNumber}
              key={index}
              element={element}
            />
          ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Status;
