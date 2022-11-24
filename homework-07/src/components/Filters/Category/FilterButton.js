import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

const FilterButton = (props) => {
  const { action, setPageNumber, element, status, species, gender } = props;

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    action(element);
    setPageNumber(1);

    navigate('/characters/pages/1');

    // const paramsObj = { status: status, species: species, gender: gender };
    // const searchParamsObj = new URLSearchParams(paramsObj);

    // setSearchParams(searchParamsObj);
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
