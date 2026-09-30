import styles from "./CarritoItem.module.css";

export function CarritoItem({ item, onRemove, onUpdateQuantity }) {
  // Información del producto:
  const { id, nombre, precio, cantidad, stock, imagen } = item;

  // Cálculo del subtotal:
  const subtotal = precio * cantidad;

  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        <img src={imagen} alt={nombre} className={styles.image} />
      </div>

      <div className={styles.infoContainer}>
        <h4 className={styles.title}>{nombre}</h4>
        <p className={styles.unitPrice}>
          Precio unitario: ${precio.toLocaleString()}
        </p>
      </div>

      <div className={styles.quantityContainer}>
        <button
          className={styles.btnQty}
          onClick={() => onUpdateQuantity(id, cantidad - 1)}
          disabled={cantidad <= 1}
        >
          -
        </button>
        <span className={styles.quantity}>{cantidad}</span>
        <button
          className={styles.btnQty}
          onClick={() => onUpdateQuantity(id, cantidad + 1)}
          disabled={cantidad >= stock}
        >
          +
        </button>
      </div>

      <div className={styles.subtotalContainer}>
        <span className={styles.subtotalLabel}>Subtotal:</span>
        <span className={styles.subtotalAmount}>
          ${subtotal.toLocaleString()}
        </span>
      </div>

      <button
        className={styles.btnRemove}
        onClick={() => onRemove(id)}
        title="Eliminar producto"
      >
        &times;
      </button>
    </div>
  );
}
