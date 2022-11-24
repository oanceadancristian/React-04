import React from 'react';
import FilterButton from './FilterButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';

const Gender = (props) => {
  const { setGender, setPageNumber } = props;

  const genderList = ['Male', 'Female', 'Genderless', 'Unknown'];

  return (
    <Accordion sx={{ backgroundColor: '#C0C0C0', color: '#000' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: '#000' }} />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography component={'span'} sx={{ fontWeight: 'bold' }}>
          Gender
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component={'span'}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              {genderList.map((element, index) => (
                <FilterButton
                  action={setGender}
                  setPageNumber={setPageNumber}
                  key={index}
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

export default Gender;
