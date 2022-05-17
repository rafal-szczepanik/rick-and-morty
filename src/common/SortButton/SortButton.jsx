import React from 'react';
import './SortButton.css';

export const SortButton = ({onClick, isSorted}) => (
  <button
    className="Sort-button"
    onClick={onClick}
  >{!isSorted ? 'Sort this page by name' : 'Sort this page by ID'}
  </button>
);