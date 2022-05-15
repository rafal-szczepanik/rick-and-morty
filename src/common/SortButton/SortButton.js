import React from 'react';
import './SortButton.css';

export const SortButton = (sortList, isSorted) => {

  return (
    <button
      className="Sort-button"
      onClick={sortList.sortList}
    >{sortList.isSorted ? ' Sort by Name' : 'Sort by ID'}
    </button>
  );
};