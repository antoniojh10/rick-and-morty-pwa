import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback
} from "react";
import CharacterItem from "./CharacterItem";
import Search from "./Search";

import useCharacters from "../hooks/useCharacters";

const initialState = {
  favorites: []
};

const API = "https://rickandmortyapi.com/api/character";

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload.id)
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const characters = useCharacters(API);

  const addToFavorites = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: favorite });
  };

  const removeFromFavorites = (favorite) => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: favorite });
  };

  /* const handleSearch = () => {
    setSearch(searchInput.current.value);
  }; */

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  /* const filteredUsers = characters.filter((user) => {
    return user.name.toLowerCase().includes(search.toLocaleLowerCase());
  }); */

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLocaleLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="Characters">
      <div className="p-4 w-full">
        {favorites.favorites.length > 0 && (
          <h1 className="text-3xl font-extrabold mb-5">Favorites</h1>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {favorites.favorites.map((character) => (
            <CharacterItem
              key={character.id}
              character={character}
              buttonText="Quitar"
              handleClick={removeFromFavorites}
            />
          ))}
        </div>
      </div>
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <div className="p-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredUsers.map((character) => (
            <CharacterItem
              key={character.id}
              character={character}
              buttonText="Agregar a Favoritos"
              handleClick={addToFavorites}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
