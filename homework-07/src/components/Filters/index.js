import React from 'react';
import Status from './Category/Status';
import Species from './Category/Species';
import Gender from './Category/Gender';
import Box from '@mui/system/Box';

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
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
        }}
      >
        Filters
      </Box>
      <Box
        sx={{
          backgroundColor: '#c0c0c0',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          textDecoration: 'underline',
          cursor: 'pointer',
          borderBottomLeftRadius: '5px',
          borderBottomRightRadius: '5px',
        }}
      >
        <Box component="span" onClick={handleClick}>
          Clear filters
        </Box>
      </Box>

      <Box>
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </Box>
    </Box>
  );
};

export default Filters;
