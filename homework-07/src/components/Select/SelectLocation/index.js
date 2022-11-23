import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectLocation.css';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectLocation = (props) => {
  const { total, setLocationId } = props;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLocationId(e.target.value);
    navigate(`/locations/${e.target.value}`);
  };

  return (
    <div className="select-container">
      <div className="select-title">Select location</div>
      <div className="option-container">
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
                    Location - {number + 1}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
};

export default SelectLocation;
