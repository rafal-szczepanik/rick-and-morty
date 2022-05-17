import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";

import './ActionButton.css';

export const ActionButton = ({character, actionType}) => {
  const {addToFavouriteList, favouriteList, removeFromFavouriteList} = useContext(GlobalContext);

  let storedCharacter = favouriteList.find(obj => obj.id === character.id);
  const characterDisabled = !!storedCharacter;

  return (
    <>
      {actionType === 'add' && <button
        className={`Action-button ${characterDisabled && "Action-button--disabled"}`}
        disabled={characterDisabled}
        onClick={() => addToFavouriteList(character)}
      >
        {characterDisabled ? 'Already added' : 'Add to favourite'}
      </button>}
      {actionType === 'remove' && <button
        className="Action-button"
        onClick={() => removeFromFavouriteList(character.id)}>
        Remove
      </button>}
    </>

  );
};