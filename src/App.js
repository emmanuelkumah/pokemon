import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import React from "react";
import Pokemons from "./Components/Pokemons/Pokemons";
import PokemonDetails from "./Components/PokemonDetails/PokemonDetails";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState();
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  useEffect(() => {
    fetchPokemons();
  }, [currentPage]);

  // console.log(pokemonDetails);

  const fetchPokemons = () => {
    axios
      .get(currentPage)
      .then((res) => {
        const { data } = res;
        setPokemons(data.results);
        setNextPage(data.next);
        setPrevPage(data.previous);
      })
      .catch((err) => console.log(err));
  };
  //go to next page
  const fetchNextPage = () => {
    setCurrentPage(nextPage);
  };

  // //go to previous page
  const fetchPreviousPage = () => {
    setCurrentPage(prevPage);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Pokemons
              pokemons={pokemons}
              fetchNextPage={fetchNextPage}
              fetchPreviousPage={fetchPreviousPage}
            />
          }
        />
        <Route path=":id" element={<PokemonDetails pokemons={pokemons} />} />
      </Routes>
    </>
  );
};

export default App;
