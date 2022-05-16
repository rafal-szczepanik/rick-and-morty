import React from 'react';
import './SortButton.css';

export const SortButton = ({onClick, isSorted}) => (
  <button
    className="Sort-button"
    onClick={onClick}
  >{!isSorted ? ' Sort by Name' : 'Sort by ID'}
  </button>
);