import React from 'react';
import {ActionButton} from "../../../common/ActionButton/ActionButton";

import './SingleCharacterTable.css';

export const SingleCharacterTable = ({characterInfo}) => {

  return (
    <table className="SingleCharacterTable">
      <tbody>
        <tr>
          <th>#</th>
          <td>{characterInfo.id}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{characterInfo.name}</td>
        </tr>
        <tr>
          <th>Species</th>
          <td>{characterInfo.species}</td>
        </tr>
        <tr>
          <th>Gender</th>
          <td>{characterInfo.gender}</td>
        </tr>
        <tr>
          <th>Origin</th>
          <td>{characterInfo.origin.name}</td>
        </tr>
        <tr>
          <th>Current location</th>
          <td>{characterInfo.location.name}</td>
        </tr>
        <tr>
          <th>Number of Episodes</th>
          <td>{characterInfo.episode.length}</td>
        </tr>
        <tr>
          <th>Type</th>
          <td>{!characterInfo.type ? 'unknown' : characterInfo.type}</td>
        </tr>
        <tr>
          <th>Status</th>
          <td>{characterInfo.status}</td>
        </tr>
        <tr>
          <th>Action</th>
          <td><ActionButton type="add" character={characterInfo}/></td>
        </tr>
      </tbody>
    </table>
  );
};

