import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PlaceIcon from '@mui/icons-material/LocationOn';

const SelectLocation = (props) => {
  const { total, locationId, setLocationId } = props;

  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    if (Object.keys(params).length === 0) {
      navigate('/locations/1');
    }
  }, [navigate, params]);

  const [value, setValue] = useState(locationId);

  const handleChange = (e) => {
    setValue(e.target.value);
    setLocationId(e.target.value);
    navigate(`/locations/${e.target.value}`);
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
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <PlaceIcon fontSize="medium" sx={{ marginRight: '3px' }} />
        Select location
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
              value={value}
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
                      display: 'flex',
                      justifyContent: 'center',
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
      </Box>
    </Box>
  );
};

export default SelectLocation;
