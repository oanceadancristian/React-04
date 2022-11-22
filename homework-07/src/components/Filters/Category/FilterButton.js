import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './FilterButton.css';

const FilterButton = (props) => {
  const { action, setPageNumber, element } = props;

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    action(element);
    setPageNumber(1);
  };

  return (
    <div className="buttons-container">
      <Button
        variant="outlined"
        onClick={handleClick}
        sx={{
          width: '100%',
          backgroundColor: clicked ? '#f08d49' : '#fff',
          color: clicked ? '#fff' : '#000',
          border: clicked ? '1px solid #f08d49' : '1px solid #fff',
          '&:hover': {
            backgroundColor: clicked ? '#f08d49' : '#f08d49',
            color: clicked ? '#fff' : '#fff',
            border: clicked ? '1px solid #f08d49' : '1px solid #f08d49',
          },
        }}
      >
        {element}
      </Button>
    </div>
  );
};

export default FilterButton;
