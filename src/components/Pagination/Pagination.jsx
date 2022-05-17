import React from 'react';
import {Link} from "react-router-dom";

import './Pagination.css';

export const Pagination = ({currentPage, totalPages, handleClick, prevPage, nextPage}) => {
  const pageUrl = 'https://rickandmortyapi.com/api/character?page=';

  const pages = [...Array(totalPages).keys()].map(key => key + 1);

  const handlePaginationClick = (num) => {
    handleClick(`${pageUrl}${num}`);
  };

  const handlePaginationPrevClick = () => {
    prevPage && handleClick(prevPage);
  };

  const handlePaginationNextClick = () => {
    nextPage && handleClick(nextPage);
  };

  return (
    <div className="Pagination">
      <Link
        className="Pagination__prev-next-item"
        onClick={handlePaginationPrevClick}
        to={`/characters`}
      >
        {`<<<`}
      </Link>
      {pages.map(num => {
        return <Link
          className={`Pagination__item ${num === currentPage && 'Pagination__item--active'}`}
          to={`/characters`}
          key={num}
          onClick={() => handlePaginationClick(num)}
        >
          {num}
        </Link>;
      })}
      <Link
        className="Pagination__prev-next-item"
        onClick={handlePaginationNextClick}
        to={`/characters`}
      >
        next >>>
      </Link>
    </div>
  );
};
