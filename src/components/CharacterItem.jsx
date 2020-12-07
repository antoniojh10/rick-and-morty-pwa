import React from "react";

const CharacterItem = ({ character, handleClick, buttonText }) => {
  return (
    <div className="Character shadow-xl rounded-xl">
      <div className="col-span-12 h-full sm:col-span-6 md:col-span-3 rounded-xl">
        <div className="flex h-full flex-row bg-gray-500 text-gray-50 shadow-xl rounded-xl p-4">
          <div className="flex items-center justify-center flex-shrink-0 h-24 w-24 rounded-xl overflow-hidden">
            <img src={character.image} alt={character.name} />
          </div>
          <div className="flex flex-col flex-grow ml-4 text-left">
            <div className="font-bold text-lg">{character.name}</div>
            <div className="text-sm text-white">Status: {character.status}</div>
            <div className="text-sm text-white">
              Species: {character.species}
            </div>
            <button
              type="button"
              className="border border-gray-700 bg-gray-700 text-white rounded-md mt-2 px-2 py-1 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              onClick={() => handleClick(character)}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
