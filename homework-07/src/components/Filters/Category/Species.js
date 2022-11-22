import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterButton from './FilterButton';

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
    <Accordion sx={{ backgroundColor: '#3c3e44', color: '#fff' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>Species</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {speciesList.map((element, index) => (
            <FilterButton
              action={setSpecies}
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

export default Species;
