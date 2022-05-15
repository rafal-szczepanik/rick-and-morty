import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from "./AppReducer";

const initialState = {
  favouriteList: localStorage.getItem('favouriteList') ? JSON.parse(localStorage.getItem('favouriteList')) : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('favouriteList', JSON.stringify(state.favouriteList));
  }, [state]);

  const addToFavouriteList = favourite => {
    dispatch({
      type: "ADD_CHARACTER_TO_FAVOURITES",
      payload: favourite
    });
  };

  const removeFromFavouriteList = id => {
    dispatch({
      type: "REMOVE_CHARACTER_FROM_FAVOURITES",
      payload: id
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        favouriteList: state.favouriteList,
        addToFavouriteList,
        removeFromFavouriteList
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

