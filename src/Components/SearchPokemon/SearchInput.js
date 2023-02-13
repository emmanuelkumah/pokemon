import React from "react";

const SearchInput = ({ searchPokemon, setSearchPokemon }) => {
  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //clear input
    setSearchPokemon("");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoFocus
            value={searchPokemon}
            placeholder="Enter the name of pokemon to search for"
            onChange={(event) => setSearchPokemon(event.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default SearchInput;
