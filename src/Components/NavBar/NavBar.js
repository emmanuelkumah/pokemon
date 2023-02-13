import React from "react";
import styles from "../../styles/Nav.module.css";
import logo from "../../images/logopokemon.png";
function NavBar() {
  return (
    <>
      <header>
        <nav className={styles["nav__container"]}>
          <img
            src={logo}
            alt="pokemonLogo"
            className={styles["pokemon_logo"]}
          />
        </nav>
      </header>
    </>
  );
}

export default NavBar;
