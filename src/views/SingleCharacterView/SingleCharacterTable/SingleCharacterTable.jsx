import React from 'react';
import {ActionButton} from "../../../common/ActionButton/ActionButton";

import './SingleCharacterTable.css';

export const SingleCharacterTable = ({characterInfo}) => {
  const {status, origin, name, gender, species, id, location, episode, type} = characterInfo;

  return (
    <table className="SingleCharacter-table">
      <tbody>
        <tr>
          <th>#</th>
          <td className="SingleCharacter-table__cell">{id}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>Species</th>
          <td>{species}</td>
        </tr>
        <tr>
          <th>Gender</th>
          <td>{gender}</td>
        </tr>
        <tr>
          <th>Origin</th>
          <td>{origin.name}</td>
        </tr>
        <tr>
          <th>Current location</th>
          <td>{location.name}</td>
        </tr>
        <tr>
          <th>In how many episodes</th>
          <td>{episode.length}</td>
        </tr>
        <tr>
          <th>Type</th>
          <td>{!type ? 'unknown' : type}</td>
        </tr>
        <tr>
          <th>Status</th>
          <td>{status}</td>
        </tr>
        <tr>
          <th>Action</th>
          <td><ActionButton actionType="add" character={characterInfo}/></td>
        </tr>
      </tbody>
    </table>
  );
};

