import { ContactoListContainer } from "../ContactoListContainer/ContactoListContainer";
import { NewsletterForm } from "../NewsletterForm/NewsletterForm";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.col}>
          <h3 className={styles.brand}>Casaca Hub</h3>
          <p className={styles.description}>
            Especialistas en camisetas de fútbol.
          </p>
          <ul className={styles.legalLinks}>
            <li>
              <a href="#politicas">Políticas de privacidad</a>
            </li>
            <li>
              <a href="#terminos">Términos y condiciones</a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Nuestras sedes</h4>
          <p>📍 Av. Corrientes 1234, CABA</p>
          <p>📍 Peatonal Córdoba 567, Rosario</p>
          <p>📍 Av. Colón 890, Córdoba</p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Novedades</h4>
          <p className={styles.subtext}>
            Suscribite para lanzamientos exclusivos.
          </p>
          <NewsletterForm />
        </div>

        <div className={styles.teamRow}>
          <ContactoListContainer mensaje="Nuestro equipo" />
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; 2026 Casaca Hub. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
