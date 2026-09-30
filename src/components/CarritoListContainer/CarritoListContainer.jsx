import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CarritoList } from "../CarritoList/CarritoList";
import styles from "./CarritoListContainer.module.css";

export function CarritoListContainer({
  cart,
  onRemoveItem,
  onUpdateQuantity,
  onClearCart,
  totalPrice,
  onFinalizarCompra,
}) {
  // Orden de compra:
  const [orden, setOrden] = useState(null);

  // Desplazar ventana hacia el inicio del contenido cuando se confirma una compra:
  useEffect(() => {
    if (orden) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [orden]);

  // Manejar confirmación de compra:
  const handleCheckout = () => {
    // Generamos un número de orden simulado:
    const numeroOrden = Math.floor(Math.random() * 900000) + 100000;

    // Guardamos la información que queremos mostrar al usuario:
    setOrden({
      id: numeroOrden,
      total: totalPrice,
      cantidadProductos: cart.reduce((acc, item) => acc + item.cantidad, 0),
    });

    onFinalizarCompra(cart);

    // Vaciamos el carrito en el estado global:
    onClearCart();
  };

  // 1. Si la compra finalizó con éxito, mostramos este mensaje visual:
  if (orden) {
    return (
      <div className={styles.successContainer}>
        <div className={styles.successIcon}>✓</div>
        <h2>¡Gracias por tu compra!</h2>
        <p className={styles.orderNumber}>
          Orden número: <strong>#{orden.id}</strong>
        </p>

        <div className={styles.summaryBox}>
          <p>
            Compraste <strong>{orden.cantidadProductos} productos</strong>
          </p>
          <p className={styles.totalText}>
            Total abonado: <span>${orden.total.toLocaleString()}</span>
          </p>
        </div>

        <p className={styles.hintText}>
          Te enviamos un correo con el resumen y el código de seguimiento de tu
          paquete.
        </p>

        <Link to="/productos" className={styles.btnReturn}>
          ← Volver a la tienda
        </Link>
      </div>
    );
  }

  // Si el carrito está vacío, mostramos el mensaje de retorno:
  if (!cart || cart.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <h2>Tu carrito está vacío 🛒</h2>
        <p>
          ¿Aún no te decidiste? ¡Explorá nuestras camisetas y sumá tu favorita!
        </p>
        <Link to="/productos" className={styles.btnReturn}>
          ← Volver a la tienda
        </Link>
      </div>
    );
  }

  // Si hay productos, los pasamos a CarritoList:
  return (
    <div className={styles.container}>
      <div className={styles.topActions}>
        <Link to="/productos" className={styles.btnReturn}>
          ← Volver a la tienda
        </Link>
      </div>
      <CarritoList
        cart={cart}
        onRemove={onRemoveItem}
        onUpdateQuantity={onUpdateQuantity}
        onClear={onClearCart}
        total={totalPrice}
        onCheckout={handleCheckout}
      />
    </div>
  );
}
