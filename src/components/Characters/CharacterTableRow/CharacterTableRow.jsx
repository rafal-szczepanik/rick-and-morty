import React from 'react';
import {Link} from "react-router-dom";
import {ActionButton} from "../../../common/ActionButton/ActionButton";

import './CharacterTableRow.css';

export const CharacterTableRow = ({character, actionType, tableColumn}) => {
  const {image, species, id, name, status} = character;

  return (
    <tr>
      <td>{id}</td>
      <td>
        <img className='Table-row__image'
          src={image}
          alt={`Character ${name}`}
        />
      </td>
      <td>
        <Link
          className="Table-row__more-info-link"
          to={`/characters/${id}`}>
          {name}
        </Link>
      </td>
      {tableColumn && <td>{status}</td>}
      <td>{species}</td>
      <td>
        <ActionButton
          character={character}
          actionType={actionType}
        />
      </td>
    </tr>
  );
};
