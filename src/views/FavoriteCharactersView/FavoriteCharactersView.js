import React, {useContext, useState} from 'react';
import {CharactersTable} from "../../components/Characters/CharactersTable/CharactersTable";
import {GlobalContext} from "../../context/GlobalState";
import {SortButton} from "../../common/SortButton/SortButton";
import {useWebsiteTitle} from "../../hooks/useWebsiteTitle";

export const FavoriteCharactersView = () => {
  const {favouriteList} = useContext(GlobalContext);
  useWebsiteTitle('Favourites Characters');

  const [isSorted, setIsSorted] = useState(false);


  const sortedByIdList = [...favouriteList].sort((a, b) => a.id - b.id);
  const sortedByNameList = [...sortedByIdList].sort((a, b) => a.name.localeCompare(b.name));

  const sortList = () => {
    setIsSorted((prevState) => !prevState);
  };

  return (
    <div>
      <h1>Your Favourite Rick and Morty Characters </h1>
      <SortButton
        isSorted={isSorted}
        sortList={sortList}/>
      {sortedByIdList.length === 0
        ? <h2>No favourites characters in your list.</h2>
        : <CharactersTable
          characters={isSorted ? sortedByIdList : sortedByNameList}
          type="remove"
        />}
    </div>
  );
};