import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Pokemons.module.css";

const Pokemons = ({ pokemons, fetchNextPage, fetchPreviousPage }) => {
  const listPokemons = pokemons.map((pokemon) => {
    const { name } = pokemon;
    return (
      <li key={name} className={styles["pokemon_list"]}>
        <div className={styles["pokemon__name_container"]}>
          <h3 className={styles["pokemon_name"]}>{name}</h3>
          <Link to={name}>
            <button className={styles["pokemon__btn"]}>View Details</button>
          </Link>
        </div>
      </li>
    );
  });
  return (
    <>
      <section className={styles["pokemons__container"]}>
        <div className={styles["pokemons__heading"]}>
          <h2>Spreading love through Pokemons</h2>
          <p>Explore a wide range of Pokemons</p>
        </div>
        <div className={styles["pokemons__lists_container"]}>
          <ul>{listPokemons}</ul>
        </div>
        <div className={styles["pokemon__pageBtns"]}>
          <button onClick={fetchPreviousPage} className={styles["btn__prev"]}>
            Previous
          </button>
          <button onClick={fetchNextPage} className={styles["btn__next"]}>
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default Pokemons;
