import React from "react";
import styles from "./styles/App.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Pokemons from "./Components/Pokemons/Pokemons";
import PokemonDetails from "./Components/PokemonDetails/PokemonDetails";
import SearchInput from "./Components/SearchPokemon/SearchInput";
import FoundPokemon from "./Components/SearchPokemon/FoundPokemon";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState();
  const [searchPokemon, setSearchPokemon] = useState("");
  const [findEnteredPokemon, setFindEnteredPokemon] = useState("");
  const [hasSearchedPokemon, setHasSearchedPokemon] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  useEffect(() => {
    if (searchPokemon.length > 2) {
      findPokemon();
    }
    fetchPokemons();
  }, [currentPage, searchPokemon]);

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

  const fetchNextPage = () => {
    setCurrentPage(nextPage);
  };

  const fetchPreviousPage = () => {
    setCurrentPage(prevPage);
  };

  //find a searched pokemon
  const findPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
      .then((res) => setFindEnteredPokemon(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavBar />
      <section className={styles["app__main"]}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchInput
                  searchPokemon={searchPokemon}
                  setSearchPokemon={setSearchPokemon}
                />
                {findEnteredPokemon.length !== 0 ? (
                  <FoundPokemon findEnteredPokemon={findEnteredPokemon} />
                ) : (
                  <Pokemons
                    pokemons={pokemons}
                    fetchNextPage={fetchNextPage}
                    fetchPreviousPage={fetchPreviousPage}
                  />
                )}
              </>
            }
          />
          <Route path=":id" element={<PokemonDetails pokemons={pokemons} />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
};

export default App;
