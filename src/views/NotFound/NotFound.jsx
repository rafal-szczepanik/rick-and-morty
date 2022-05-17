import React from 'react';
import {GoBackLink} from "../../common/GoBackLink/GoBackLink";

import './NotFound.css'

export const NotFound = () => {
  return (
    <div className="Not-found">
      <h1>Page not found :(</h1>
      <p>Provide correct page address.</p>
      <GoBackLink/>
    </div>
  );
};