import { Link } from "react-router-dom";
import styles from "./Item.module.css";

export function Item({ id, imagen, nombre, precio }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imagen} alt={nombre} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{nombre}</h3>
        <p className={styles.price}>${precio.toLocaleString()}</p>
        <Link to={`/item/${id}`} className={styles.button}>
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
