import React, {useEffect, useState} from 'react';
import {Spinner} from "../../../common/Spinner/Spinner";
import {CharactersTable} from "../CharactersTable/CharactersTable";
import {Pagination} from "../../Pagination/Pagination";
import {useWebsiteTitle} from "../../../hooks/useWebsiteTitle";
import {SortButton} from "../../../common/SortButton/SortButton";

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
    setData(null);
  };

  const {results, info} = data;

  const sortedByName = [...results].sort((a, b) => a.name.localeCompare(b.name));
  console.log(sortedByName);

  return (
    <>
      <h1>Rick & Morty Characters List</h1>
      <SortButton isSorted={isSorted} onClick={() => setIsSorted((prevState) => !prevState)}/>
      <CharactersTable
        characters={!isSorted ? results : sortedByName}
        type="add"
      />
      <Pagination
        totalPages={info.pages}
        nextPage={info.next}
        prevPage={info.prev}
        handleSetUrl={handleClick}
      />
    </>
  );
};