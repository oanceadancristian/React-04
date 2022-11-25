import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
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

  const navigate = useNavigate();

  const params = useParams();

  const location = useLocation();

  useEffect(() => {
    if (Object.keys(params).length === 0) {
      navigate('/characters/pages/1');
    }
  }, [navigate, params]);

  const handlePageChange = (data) => {
    setPageNumber(data.selected + 1);
    navigate(`/characters/pages/${data.selected + 1}${location.search}`);
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
