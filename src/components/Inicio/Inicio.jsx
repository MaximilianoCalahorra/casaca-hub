import { Link } from "react-router-dom";
import styles from "./Inicio.module.css";

export function Inicio({ competiciones = [] }) {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>La casa de la camiseta de fútbol</h1>
          <p className={styles.heroSub}>
            Colecciones oficiales 2026/2027 de los mejores clubes del mundo y
            selecciones nacionales.
          </p>
          <Link to="/productos" className={styles.ctaButton}>
            Ver todo el catálogo
          </Link>
        </div>
      </section>

      <section className={styles.leagueSection}>
        <h2 className={styles.sectionTitle}>Nuestras competiciones</h2>
        <div className={styles.leagueGrid}>
          {competiciones.map((comp) => (
            <Link to="/productos" key={comp.id} className={styles.leagueCard}>
              <img
                src={comp.logo}
                alt={comp.nombre}
                className={styles.leagueLogo}
              />
              <span className={styles.leagueName}>{comp.nombre}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.benefitCard}>
          <span className={styles.icon}>🚚</span>
          <h3>Envíos a todo el país</h3>
          <p>Despachos rápidos y seguimiento online en tiempo real.</p>
        </div>
        <div className={styles.benefitCard}>
          <span className={styles.icon}>🛡️</span>
          <h3>Indumentaria 100% oficial</h3>
          <p>Garantía de autenticidad en cada prenda y estampado.</p>
        </div>
        <div className={styles.benefitCard}>
          <span className={styles.icon}>💳</span>
          <h3>Cuotas sin interés</h3>
          <p>Aceptamos todas las tarjetas de crédito y medios de pago.</p>
        </div>
      </section>
    </div>
  );
}
