import React, {useEffect, useState} from 'react';
import {useWebsiteTitle} from "../../hooks/useWebsiteTitle";
import {useParams} from "react-router-dom";
import {Spinner} from "../../common/Spinner/Spinner";
import {SingleCharacterTable} from "../SingleCharacterView/SingleCharacterTable/SingleCharacterTable";
import {NotFound} from "../NotFound/NotFound";

import './FavouriteCharactersDetailsView.css';
import {GoBackLink} from "../../common/GoBackLink/GoBackLink";

export const FavouriteCharactersDetailsView = () => {
  const [characterInfo, setCharacterInfo] = useState(null);
  const {ids} = useParams();

  useWebsiteTitle(`Favourite Characters details`);

  useEffect(() => {

    (async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${ids}`);
      const data = await res.json();
      setCharacterInfo(data);
    })();

  }, []);

  if (characterInfo === null) {
    return <Spinner/>;
  }

  return (
    <div className="Favourite-details-view" >
      {characterInfo.length > 1 ? characterInfo.map(el => (
          <div className="Favourite-details-view__element" key={el.id}>
            <img className="Favourite-details__image" src={el.image} alt={el.name}/>
            <SingleCharacterTable
              key={el.id}
              characterInfo={el}
            />
          </div>
        ))
        : <NotFound/>}
      <GoBackLink/>
    </div>
  );
};