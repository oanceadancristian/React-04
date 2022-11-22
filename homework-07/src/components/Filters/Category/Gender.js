import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterButton from './FilterButton';

const Gender = (props) => {
  const { setGender, setPageNumber } = props;

  const genderList = ['Male', 'Female', 'Genderless', 'Unknown'];

  return (
    <Accordion sx={{ backgroundColor: '#3c3e44', color: '#fff' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography>Gender</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {genderList.map((element, index) => (
            <FilterButton
              action={setGender}
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

export default Gender;
