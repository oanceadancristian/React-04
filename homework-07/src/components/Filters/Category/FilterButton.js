import React from 'react';
import { useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

const FilterButton = (props) => {
  const { action, setPageNumber, element } = props;

  const navigate = useNavigate();

  const handleChange = () => {
    if (
      element === 'Unknown status' ||
      element === 'Unknown species' ||
      element === 'Unknown gender'
    ) {
      action(element.slice(0, 7));
    } else {
      action(element);
    }

    setPageNumber(1);

    navigate('/characters/pages/1');
  };

  return (
    <FormControlLabel
      control={
        <Radio
          sx={{
            color: 'black',
            '&.Mui-checked': {
              color: '#7300e6',
            },
          }}
        />
      }
      checked={
        element === localStorage.getItem('Status') ||
        element === localStorage.getItem('Species') ||
        element === localStorage.getItem('Gender')
      }
      label={
        element === 'Unknown status' ||
        element === 'Unknown species' ||
        element === 'Unknown gender'
          ? 'Unknown'
          : element
      }
      value={element}
      onChange={handleChange}
      sx={{ color: 'black' }}
    />
  );
};

export default FilterButton;
