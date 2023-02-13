import React from "react";

const FoundPokemon = ({ findEnteredPokemon }) => {
  const imgURL = findEnteredPokemon.sprites
    ? findEnteredPokemon.sprites.back_default
    : "";
  return (
    <>
      <img src={imgURL} alt="pokemonImg" />
      <h2> {findEnteredPokemon.name}</h2>
    </>
  );
};

export default FoundPokemon;
