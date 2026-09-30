import styles from "./Contacto.module.css";

export function Contacto({ nombre, email, puesto, foto }) {
  return (
    <article className={styles.miniCard}>
      <img
        src={`${import.meta.env.BASE_URL}${foto}`}
        alt={nombre}
        className={styles.avatar}
      />
      <div className={styles.info}>
        <h5 className={styles.nombre}>{nombre}</h5>
        <p className={styles.puesto}>{puesto}</p>
        <p className={styles.email}>{email}</p>
      </div>
    </article>
  );
}
