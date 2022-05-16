import React from 'react';
import {CharacterTableRow} from "../CharacterTableRow/CharacterTableRow";

import './CharactersTable.css';

export const CharactersTable = ({characters, type}) => {
  return (
    <table className="Table">
      <thead>
        <tr>
          <th>#</th>
          <th>Avatar</th>
          <th>Name (more info)</th>
          <th>IsAlive?</th>
          <th>Species</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {characters.map(character => (
          <CharacterTableRow
            key={character.id}
            character={character}
            characters={characters}
            type={type}
          />
        ))
        }
      </tbody>
    </table>
  );
};


