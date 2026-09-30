import { useState } from "react";
import styles from "./ItemDetail.module.css";

export function ItemDetail({
  id,
  nombre,
  precio,
  stock,
  imagen,
  descripcion,
  onAddToCart,
  isFavorito,
  onToggleFavorito,
}) {
  // Cantidad del producto:
  const [cantidad, setCantidad] = useState(1);

  // Mensaje de producto agregado:
  const [mensajeAgregado, setMensajeAgregado] = useState(false);

  // Incrementar cantidad en uno:
  const incrementar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  // Decrementar cantidad en uno:
  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  // Agregar producto al carrito:
  const agregarAlCarrito = () => {
    const productoAAgregar = {
      id,
      nombre,
      precio,
      imagen,
      cantidad,
      stock,
    };

    if (onAddToCart) {
      onAddToCart(productoAAgregar);
    }

    // Mensaje de confirmación por 2.5 segundos:
    setMensajeAgregado(true);
    setTimeout(() => {
      setMensajeAgregado(false);
    }, 2500);
  };

  return (
    <div className={styles.detailCard}>
      <div className={styles.imageContainer}>
        <img src={imagen} alt={nombre} className={styles.image} />
        <button
          className={`${styles.favoriteBadge} ${isFavorito ? styles.active : ""}`}
          onClick={onToggleFavorito}
          aria-label="Agregar a favoritos"
        >
          {isFavorito ? "★" : "☆"}
        </button>
      </div>

      <div className={styles.info}>
        <h2>{nombre}</h2>
        <p className={styles.price}>${precio.toLocaleString()}</p>
        <p className={styles.stock}>
          Stock disponible: <span>{stock}</span>
        </p>
        <p className={styles.description}>{descripcion}</p>

        <div className={styles.actions}>
          <div className={styles.amountContainer}>
            <button
              className={styles.buttonAmount}
              onClick={decrementar}
              disabled={cantidad <= 1}
            >
              -
            </button>
            <p className={styles.amount}>{cantidad}</p>
            <button
              className={styles.buttonAmount}
              onClick={incrementar}
              disabled={cantidad >= stock}
            >
              +
            </button>
          </div>
        </div>

        <button className={styles.button} onClick={agregarAlCarrito}>
          Agregar al carrito
        </button>

        {mensajeAgregado && (
          <p className={styles.successMessage}>✓ ¡Agregado al carrito!</p>
        )}
      </div>
    </div>
  );
}
