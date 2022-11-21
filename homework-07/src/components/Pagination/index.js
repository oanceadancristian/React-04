import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
  const { pageNumber, setPageNumber } = props;

  const prev = () => {
    if (pageNumber === 1) {
      return;
    }
    setPageNumber((number) => number - 1);
  };

  const next = () => {
    setPageNumber((number) => number + 1);
  };

  return (
    <div className="pagination-container">
      <button onClick={prev} className="pagination-btn">
        Prev
      </button>
      <button onClick={next} className="pagination-btn">
        Next
      </button>
    </div>
  );
};

export default Pagination;
