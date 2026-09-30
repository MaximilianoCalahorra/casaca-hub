import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logoImg from "../../assets/logo.png";

export function Header({ cartCount = 0 }) {
  // Menú abierto:
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Alternar menú abierto/cerrado:
  const toggleMenu = () => {
    setMenuAbierto((prev) => !prev);
  };

  // Cerrar menú:
  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoLink} onClick={cerrarMenu}>
        <img src={logoImg} alt="Casaca Hub" className={styles.logoImage} />
      </Link>
      <button
        className={`${styles.hamburger} ${menuAbierto ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <nav className={`${styles.nav} ${menuAbierto ? styles.navOpen : ""}`}>
        <Link to="/" onClick={cerrarMenu}>
          Inicio
        </Link>
        <Link to="/productos" onClick={cerrarMenu}>
          Productos
        </Link>
        <Link to="/carrito" className={styles.cartBtn} onClick={cerrarMenu}>
          Carrito ({cartCount})
        </Link>
      </nav>
    </header>
  );
}
