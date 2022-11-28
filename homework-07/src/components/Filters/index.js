import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Status from './Category/Status';
import Species from './Category/Species';
import Gender from './Category/Gender';
import Box from '@mui/system/Box';
import Stack from '@mui/system/Stack';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

const Filters = (props) => {
  const { setStatus, setSpecies, setGender, setPageNumber } = props;

  const [queryParams] = useSearchParams();

  const [expandedStatus, setExpandedStatus] = useState(
    queryParams.get('statusFilter') !== null &&
      queryParams.get('statusFilter') !== ''
  );

  const handleExpandedStatus = () => {
    setExpandedStatus(!expandedStatus);
  };

  const [expandedSpecies, setExpandedSpecies] = useState(
    queryParams.get('speciesFilter') !== null &&
      queryParams.get('speciesFilter') !== ''
  );

  const handleExpandedSpecies = () => {
    setExpandedSpecies(!expandedSpecies);
  };

  const [expandedGender, setExpandedGender] = useState(
    queryParams.get('genderFilter') !== null &&
      queryParams.get('genderFilter') !== ''
  );

  const handleExpandedGender = () => {
    setExpandedGender(!expandedGender);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    setStatus('');
    setSpecies('');
    setGender('');
    setPageNumber('');
    setExpandedStatus(false);
    setExpandedSpecies(false);
    setExpandedGender(false);
    localStorage.removeItem('Status');
    localStorage.removeItem('Species');
    localStorage.removeItem('Gender');
    navigate('/characters/pages/1');
  };

  return (
    <Box sx={{ textAlign: 'center', fontWeight: 'bold' }}>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          mb: 2,
          p: 2,
          fontSize: '18px',
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          backgroundColor: '#c0c0c0',
        }}
      >
        <FilterAltIcon fontSize="medium" sx={{ mr: 0.5 }} />
        Filters
      </Stack>
      <Box>
        <Status
          expandedStatus={expandedStatus}
          handleExpandedStatus={handleExpandedStatus}
          setStatus={setStatus}
          setPageNumber={setPageNumber}
        />
        <Species
          expandedSpecies={expandedSpecies}
          handleExpandedSpecies={handleExpandedSpecies}
          setSpecies={setSpecies}
          setPageNumber={setPageNumber}
        />
        <Gender
          expandedGender={expandedGender}
          handleExpandedGender={handleExpandedGender}
          setGender={setGender}
          setPageNumber={setPageNumber}
        />
      </Box>
      <Box
        sx={{
          mt: 2,
          p: 2,
          fontSize: '16px',
          borderBottomLeftRadius: 3,
          borderBottomRightRadius: 3,
          backgroundColor: '#c0c0c0',
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          component="span"
          onClick={handleClick}
          sx={{
            fontWeight: 'normal',
            textDecoration: 'underline',
            cursor: 'pointer',
            '&:hover': {
              color: '#8c1aff',
            },
          }}
        >
          <FilterAltOffIcon fontSize="medium" sx={{ mr: 0.5 }} />
          Clear filters
        </Stack>
      </Box>
    </Box>
  );
};

export default Filters;
