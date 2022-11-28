import React, { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import FilterButton from './FilterButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';

const Status = (props) => {
  const { expandedStatus, handleExpandedStatus, setStatus, setPageNumber } =
    props;

  const statusList = ['Alive', 'Dead', 'Unknown status'];

  const location = useLocation();

  useEffect(() => {
    location.pathname = '/characters/pages/1';
  }, [location]);

  const [queryParams, setQueryParamas] = useSearchParams();

  const handleStatusChange = (e) => {
    localStorage.setItem('Status', e.target.value);

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
      expanded={expandedStatus}
      onChange={handleExpandedStatus}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography component={'span'} sx={{ fontWeight: 'bold' }}>
          Status
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component={'span'}>
          <FormControl onChange={handleStatusChange}>
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
