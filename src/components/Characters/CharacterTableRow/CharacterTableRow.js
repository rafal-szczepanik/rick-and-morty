import React from 'react';
import {Link} from "react-router-dom";
import {ActionButton} from "../../../common/ActionButton/ActionButton";

import './CharacterTableRow.css';

export const CharacterTableRow = ({character, characters, type}) => {
  const {image, species, id, name, status} = character;

  return (
    <tr>
      <td>{id}</td>
      <td>
        <img
          style={{height: '50px', width: '50px', borderRadius: '50%'}}
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
      <td>{status}</td>
      <td>{species}</td>
      <td>
        <ActionButton
          character={character}
          type={type}
        />
      </td>
    </tr>
  );
};
