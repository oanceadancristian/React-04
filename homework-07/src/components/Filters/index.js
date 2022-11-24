import React from 'react';
import Status from './Category/Status';
import Species from './Category/Species';
import Gender from './Category/Gender';
import Box from '@mui/system/Box';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

const Filters = (props) => {
  const { setStatus, setSpecies, setGender, setPageNumber } = props;

  const handleClick = () => {
    setStatus('');
    setSpecies('');
    setGender('');
    setPageNumber('');
    window.location.reload();
  };

  return (
    <Box sx={{ textAlign: 'center', fontWeight: 'bold' }}>
      <Box
        sx={{
          backgroundColor: '#c0c0c0',
          padding: '10px',
          fontSize: '18px',
          marginBottom: '10px',
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <FilterAltIcon fontSize="medium" sx={{ marginRight: '3px' }} />
        Filters
      </Box>
      <Box>
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </Box>
      <Box
        sx={{
          backgroundColor: '#c0c0c0',
          padding: '10px',
          fontSize: '16px',
          marginTop: '10px',
          textDecoration: 'underline',
          cursor: 'pointer',
          borderBottomLeftRadius: '5px',
          borderBottomRightRadius: '5px',
        }}
      >
        <Box
          component="span"
          onClick={handleClick}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <FilterAltOffIcon fontSize="medium" sx={{ marginRight: '3px' }} />
          Clear filters
        </Box>
      </Box>
    </Box>
  );
};

export default Filters;
