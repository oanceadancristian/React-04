import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css';

const Search = (props) => {
  const { setSearch, setPageNumber } = props;

  const handleChange = (e) => {
    setPageNumber(1);
    setSearch(e.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        marginTop: '50px',
      }}
    >
      <Box
        sx={{
          width: 750,
          maxWidth: '100%',
        }}
      >
        <TextField
          fullWidth
          id="fullWidth"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            borderRadius: '5px',
            fontSize: '40',
            boxShadow: '0px 2px 5px #757575',
            '& label': {
              fontWeight: '600',
            },
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
    </Box>
  );
};

export default Search;
