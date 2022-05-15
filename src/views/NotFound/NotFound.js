import React from 'react';
import {GoBackLink} from "../../common/GoBackLink/GoBackLink";

export const NotFound = () => {
  return (
    <div>
      <h1>Page not found :(</h1>
      <p>Provide correct page address.</p>
      <GoBackLink/>
    </div>
  );
};