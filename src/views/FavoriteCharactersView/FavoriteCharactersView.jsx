import React, {useContext, useState} from 'react';
import {CharactersTable} from "../../components/Characters/CharactersTable/CharactersTable";
import {GlobalContext} from "../../context/GlobalState";
import {SortButton} from "../../common/SortButton/SortButton";
import {useWebsiteTitle} from "../../hooks/useWebsiteTitle";

import '../../components/Characters/CharactersList/CharactersList.css';

export const FavoriteCharactersView = () => {
  const {favouriteList} = useContext(GlobalContext);
  useWebsiteTitle('Favourites Characters');

  const [isSorted, setIsSorted] = useState(false);

  const sortedByIdList = [...favouriteList].sort((a, b) => a.id - b.id);
  const sortedByNameList = [...sortedByIdList].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="Characters-List">
      <h1 className="Characters-List__heading">Your Favourite Rick and Morty Characters </h1>
      <SortButton isSorted={isSorted} onClick={() => setIsSorted((prevState) => !prevState)}/>
      {sortedByIdList.length === 0
        ? <h2>No favourites characters in your list.</h2>
        : <CharactersTable
          characters={!isSorted ? sortedByIdList : sortedByNameList}
          actionType="remove"
        />}
    </div>
  );
};