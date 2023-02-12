import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const PokemonDetails = ({ pokemons }) => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    getDetails();
  }, []);

  const { id } = useParams();

  // find pokemon with the specified name
  const findPokemon = pokemons.find((pokemon) => pokemon.name === id);

  // fetch details of the specified pokemon
  async function getDetails() {
    const hasData = await axios
      .get(findPokemon.url)
      .then((res) => res.data)
      .catch((error) => console.log(error.message));
    setDetails(hasData);
  }

  const imgURL = details.sprites ? details.sprites.back_default : "";
  const externalURL = details.location_area_encounters;

  return (
    <>
      <section>
        <img src={imgURL} alt="pokemonDetails" />
        <h2>{details.name}</h2>

        <a href={externalURL} target="_blank" rel="noreferrer">
          Learn more
        </a>
      </section>
    </>
  );
};

export default PokemonDetails;
