import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

const Pagination = (props) => {
  const { info, pageNumber, setPageNumber } = props;
  const { pages } = info;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  const handlePageChange = (data) => {
    setPageNumber(data.selected + 1);
  };

  return (
    <ReactPaginate
      className="pagination"
      previousLabel="Prev"
      nextLabel="Next"
      previousClassName="prev-btn"
      nextClassName="next-btn"
      pageLinkClassName="page-link"
      activeLinkClassName="page-active-link"
      onPageChange={handlePageChange}
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      pageCount={pages}
    />
  );
};

export default Pagination;
