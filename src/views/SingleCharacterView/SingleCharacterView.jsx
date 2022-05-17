import React, {useEffect, useState} from 'react';
import {useWebsiteTitle} from "../../hooks/useWebsiteTitle";
import {useParams} from "react-router-dom";
import {Spinner} from "../../common/Spinner/Spinner";
import {SingleCharacterTable} from "./SingleCharacterTable/SingleCharacterTable";
import {GoBackLink} from "../../common/GoBackLink/GoBackLink";
import {NotFound} from "../NotFound/NotFound";

import './SingleCharacterView.css'

export const SingleCharacterView = () => {
  const [characterInfo, setCharacterInfo] = useState(null);

  const {id} = useParams();
  const setTitle = useWebsiteTitle();

  useEffect(() => {
    (async () => {

      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await res.json();
      setCharacterInfo(data);
      setTitle(`${data.name} details`);

    })();
  }, []);

  if (characterInfo === null) {
    return <Spinner/>;
  }

  if (!characterInfo.id) {
    return <NotFound/>;
  }

  return (
    <div className='Single-character'>
      <img className='Single-character__image' src={characterInfo.image} alt={characterInfo.name}/>
      <SingleCharacterTable
        characterInfo={characterInfo}
      />
      <GoBackLink/>
    </div>
  );
};