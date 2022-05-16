import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";

import './ActionButton.css';

export const ActionButton = ({character, type}) => {
  const {addToFavouriteList, favouriteList, removeFromFavouriteList} = useContext(GlobalContext);

  let storedCharacter = favouriteList.find(obj => obj.id === character.id);
  const characterDisabled = !!storedCharacter;

  return (
    <>
      {type === 'add' && <button
        className={`Action-button ${characterDisabled && "Action-button--disabled"}`}
        disabled={characterDisabled}
        onClick={() => addToFavouriteList(character)}

      >
        Add to favourite
      </button>}
      {type === 'remove' && <button
        className="Action-button"
        onClick={() => removeFromFavouriteList(character.id)}>
        Remove from favourite
      </button>}
    </>

  );
};