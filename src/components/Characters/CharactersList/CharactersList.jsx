import React, {useEffect, useState} from 'react';
import {Spinner} from "../../../common/Spinner/Spinner";
import {CharactersTable} from "../CharactersTable/CharactersTable";
import {Pagination} from "../../Pagination/Pagination";
import {useWebsiteTitle} from "../../../hooks/useWebsiteTitle";
import {SortButton} from "../../../common/SortButton/SortButton";
import {CHARACTERS_PER_PAGE} from "../../../constans/constans";

import './CharactersList.css';

export const CharactersList = () => {
  const urlAddress = 'https://rickandmortyapi.com/api/character';

  const [data, setData] = useState(null);
  const [url, setUrl] = useState(urlAddress);
  const [isSorted, setIsSorted] = useState(false);

  useWebsiteTitle('Rick & Morty');

  useEffect(() => {

    (async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    })();

  }, [url]);

  if (data === null) {
    return <Spinner/>;
  }

  const handleClick = (url) => {
    setUrl(url);
  };

  const {results, info} = data;

  const currentPage = Math.ceil(results.reduce((prev, curr) => curr.id) / CHARACTERS_PER_PAGE);
  const sortedByName = [...results].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="Characters-List">
      <h2 className="Characters-List__heading">Rick & Morty Characters List</h2>
      <SortButton isSorted={isSorted} onClick={() => setIsSorted((prevState) => !prevState)}/>
      <CharactersTable
        characters={!isSorted ? results : sortedByName}
        actionType="add"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={info.pages}
        nextPage={info.next}
        prevPage={info.prev}
        handleSetUrl={handleClick}
      />
    </div>
  );
};