import { useParams, Link } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import styles from "./ItemDetailContainer.module.css";

export function ItemDetailContainer({
  productos = [],
  onAddToCart,
  favoritos = [],
  onToggleFavorito,
}) {
  // Obtener id del producto desde la URL:
  const { id } = useParams();

  // Buscar producto por id:
  const producto = productos.find((p) => p.id === Number(id));

  if (!productos.length) return <p>Cargando detalle...</p>;
  if (!producto) return <p>El producto no existe.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.topActions}>
        <Link to="/productos" className={styles.btnReturn}>
          ← Volver a la tienda
        </Link>
      </div>
      <ItemDetail
        {...producto}
        onAddToCart={onAddToCart}
        isFavorito={favoritos.includes(producto.id)}
        onToggleFavorito={() => onToggleFavorito(producto.id)}
      />
    </div>
  );
}
