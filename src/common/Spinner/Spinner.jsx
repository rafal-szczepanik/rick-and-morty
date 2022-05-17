import React from 'react';
import {RingLoader} from "react-spinners";

import './Spinner.css';

export const Spinner = () => (
  <div className="Spinner">
    <RingLoader size={150} color="blueviolet"/>
  </div>);
