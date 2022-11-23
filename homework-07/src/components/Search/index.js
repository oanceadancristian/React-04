import React from 'react';
import './Search.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Search = (props) => {
  const { setSearch, setPageNumber } = props;

  const handleChange = (e) => {
    setPageNumber(1);
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-container">
      <Box
        sx={{
          width: 750,
          maxWidth: '100%',
        }}
      >
        <TextField
          fullWidth
          label="Search for characters"
          id="fullWidth"
          onChange={handleChange}
          sx={{
            '& label.Mui-focused': {
              color: '#7300e6',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#7300e6',
              },
            },
          }}
        />
      </Box>
      <button onClick={handleClick} className="form-btn">
        Search
      </button>
    </form>
  );
};

export default Search;
