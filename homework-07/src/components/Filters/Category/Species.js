import React, { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import FilterButton from './FilterButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';

const Species = (props) => {
  const { expandedSpecies, handleExpandedSpecies, setSpecies, setPageNumber } =
    props;

  const speciesList = [
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown species',
    'Animal',
    'Disease',
    'Robot',
    'Croneberg',
    'Planet',
  ];

  const location = useLocation();

  useEffect(() => {
    location.pathname = '/characters/pages/1';
  }, [location]);

  const [queryParams, setQueryParamas] = useSearchParams();

  const handleSpeciesChange = (e) => {
    localStorage.setItem('Species', e.target.value);

    setQueryParamas({
      ...queryParams,
      statusFilter:
        localStorage.getItem('Status') === null
          ? ''
          : localStorage.getItem('Status'),
      speciesFilter:
        localStorage.getItem('Species') === null
          ? ''
          : localStorage.getItem('Species'),
      genderFilter:
        localStorage.getItem('Gender') === null
          ? ''
          : localStorage.getItem('Gender'),
    });
  };

  return (
    <Accordion
      sx={{ backgroundColor: '#C0C0C0', color: 'black' }}
      expanded={expandedSpecies}
      onChange={handleExpandedSpecies}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography component={'span'} sx={{ fontWeight: 'bold' }}>
          Species
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component={'span'}>
          <FormControl onChange={handleSpeciesChange}>
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
