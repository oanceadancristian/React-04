import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterButton from './FilterButton';

import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';

const Species = (props) => {
  const { setSpecies, setPageNumber } = props;

  const speciesList = [
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Croneberg',
    'Planet',
  ];

  return (
    <Accordion sx={{ backgroundColor: '#C0C0C0', color: '#000' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: '#000' }} />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography component={'span'} sx={{ fontWeight: 'bold' }}>
          Species
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component={'span'}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              {speciesList.map((element, index) => (
                <FilterButton
                  action={setSpecies}
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

export default Species;
