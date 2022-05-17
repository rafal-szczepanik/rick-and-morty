import React, {useEffect, useState} from 'react';
import {CharacterTableRow} from "../CharacterTableRow/CharacterTableRow";

import './CharactersTable.css';

export const CharactersTable = ({characters, actionType}) => {
  const [tableColumn, setTableColumn] = useState(false);

  useEffect(() => {
    const widthHandler = () => {
      window.innerWidth > 400
        ? setTableColumn(true)
        : setTableColumn(false);
    };
    window.addEventListener('resize', widthHandler);
    return () => {
      window.removeEventListener('resize', widthHandler);
    };
  }, []);

  return (
    <table className="CharactersTable">
      <thead>
        <tr>
          <th>#</th>
          <th className="CharactersTable__thead-cell">Avatar</th>
          <th className="CharactersTable__thead-cell">Name (more info)</th>
          {tableColumn && <th>IsAlive?</th>}
          <th className="CharactersTable__thead-cell">Species</th>
          <th className="CharactersTable__thead-cell">Action</th>
        </tr>
      </thead>
      <tbody>
        {characters.map(character => (
          <CharacterTableRow
            tableColumn={tableColumn}
            key={character.id}
            character={character}
            characters={characters}
            actionType={actionType}
          />
        ))
        }
      </tbody>
    </table>
  );
};


