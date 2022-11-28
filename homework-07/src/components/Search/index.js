import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Search = (props) => {
  const { setSearch, setPageNumber } = props;

  const handleChange = (e) => {
    setPageNumber(1);
    setSearch(e.target.value);
  };

  const searchRef = useRef();

  const [searchIconColor, setSearchIconColor] = useState('gray');

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
          width: '750px',
          maxWidth: '50%',
        }}
      >
        <TextField
          placeholder="Search for character"
          fullWidth
          id="fullWidth"
          inputRef={searchRef}
          onChange={handleChange}
          onFocus={() => setSearchIconColor('#7300e6')}
          onBlur={() => setSearchIconColor('gray')}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: searchIconColor }} />
              </InputAdornment>
            ),
          }}
          sx={{
            borderRadius: '5px',
            fontSize: '40px',
            '& label': {
              fontWeight: '600',
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
