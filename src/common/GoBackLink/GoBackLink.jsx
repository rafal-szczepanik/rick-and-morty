import React from 'react';
import {Link} from "react-router-dom";

import './GoBackLink.css';

export const GoBackLink = () => <Link className="Go-back-link" to="/characters">Go back to all characters</Link>;