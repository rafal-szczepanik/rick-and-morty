export default (state, action) => {
  switch (action.type) {
    case "ADD_CHARACTER_TO_FAVOURITES":
      return {
        ...state,
        favouriteList: [action.payload, ...state.favouriteList]
      };
    case "REMOVE_CHARACTER_FROM_FAVOURITES":
      return {
        ...state,
        favouriteList: state.favouriteList.filter(character => character.id !== action.payload)
      };
    default:
      return state;
  }
}