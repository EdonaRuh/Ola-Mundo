// import { Link, useLocation } from "react-router-dom";

import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink path="/" text="Inicio" />
        <MenuLink path="/sobremim" text="Sobre Mim" />
      </nav>
    </header>
  );
}
