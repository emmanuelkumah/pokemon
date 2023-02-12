import React from "react";
import { Link } from "react-router-dom";

const Pokemons = ({ pokemons, fetchNextPage, fetchPreviousPage }) => {
  const listPokemons = pokemons.map((pokemon) => {
    const { name } = pokemon;
    return (
      <li key={name}>
        <div>
          <h3>{name}</h3>
          <Link to={name}>
            <button>View Details</button>
          </Link>
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
