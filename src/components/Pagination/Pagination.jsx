import React from 'react';
import {Link} from "react-router-dom";

import './Pagination.css';

export const Pagination = ({totalPages, handleSetUrl}) => {
  const pages = [...Array(totalPages).keys()].map(key => key + 1);

  return (
    <div className="Pagination">
      {pages.map(num => {
        return <Link
          className="Pagination__item"
          to={`/characters`}
          key={num}
          onClick={() => handleSetUrl(`https://rickandmortyapi.com/api/character?page=${num}`)}
        >
          {num}
        </Link>;
      })}
    </div>
  );
};
