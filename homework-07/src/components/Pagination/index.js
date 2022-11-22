import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

const Pagination = (props) => {
  const { info, pageNumber, setPageNumber } = props;
  const { count, pages, prev, next } = info;

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
