import React from 'react';
import './FilterButton.css';

import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

const FilterButton = (props) => {
  const { action, setPageNumber, element } = props;

  const handleClick = () => {
    action(element);
    setPageNumber(1);
  };

  return (
    <FormControlLabel
      value={element}
      control={
        <Radio
          sx={{
            color: '#f08d49',
            '&.Mui-checked': {
              color: '#f08d49',
            },
          }}
        />
      }
      label={element}
      sx={{ display: 'flex', color: '#fff' }}
      onClick={handleClick}
    />
  );
};

export default FilterButton;
