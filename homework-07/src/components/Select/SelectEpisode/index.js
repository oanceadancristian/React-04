import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectEpisode = (props) => {
  const { total, setEpisodeId } = props;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEpisodeId(e.target.value);
    navigate(`/episodes/${e.target.value}`);
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          marginBottom: '10px',
          padding: '10px',
          fontSize: '18px',
          fontWeight: 'bold',
          backgroundColor: '#c0c0c0',
          borderRadius: '5px',
        }}
      >
        Select episode
      </Box>
      <Box>
        <Box sx={{ width: '100%' }}>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                '&.Mui-focused': {
                  color: '#7300e6',
                },
              }}
            >
              Choose...
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Choose..."
              onChange={handleChange}
              sx={{
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#7300e6',
                },
                '.MuiSvgIcon-root:hover ': {
                  fill: 'red',
                },
              }}
            >
              {[...Array(total).keys()].map((number, index) => {
                return (
                  <MenuItem
                    key={index}
                    value={number + 1}
                    sx={{
                      '&:hover': {
                        backgroundColor: '#8c1aff',
                        color: 'white',
                      },
                    }}
                  >
                    Episode - {number + 1}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectEpisode;
