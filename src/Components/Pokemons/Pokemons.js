import React from "react";

const Pokemons = ({ pokemons, fetchNextPage, fetchPreviousPage }) => {
  const listPokemons = pokemons.map((pokemon) => {
    const { name, url } = pokemon;
    return (
      <li key={name}>
        <div>
          <h3>{name}</h3>
        </div>
      </li>
    );
  });
  return (
    <>
      <section>
        <h2>List of Pokemons</h2>
        <ul>{listPokemons}</ul>
        <div>
          <button onClick={fetchPreviousPage}>Previous</button>

          <button onClick={fetchNextPage}>Next</button>
        </div>
      </section>
    </>
  );
};

export default Pokemons;
