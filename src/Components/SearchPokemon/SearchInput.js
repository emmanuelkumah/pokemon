import React from "react";
import styles from "../../styles/Pokemons.module.css";

const SearchInput = ({ searchPokemon, setSearchPokemon }) => {
  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //clear input
    setSearchPokemon("");
  };

  return (
    <>
      <section className={styles["pokemon__form"]}>
        <h4>Search Pokemon by Name</h4>
        <form onSubmit={handleSubmit}>
          <input
            className={styles["pokemon__inputField"]}
            type="text"
            autoFocus
            value={searchPokemon}
            placeholder="Enter the name of pokemon to search by"
            onChange={(event) => setSearchPokemon(event.target.value)}
          />
        </form>
      </section>
    </>
  );
};

export default SearchInput;
