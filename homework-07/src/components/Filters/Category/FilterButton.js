import React from 'react';
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
      label={element}
      value={element}
      onClick={handleClick}
      sx={{ color: 'black' }}
    />
  );
};

export default FilterButton;
