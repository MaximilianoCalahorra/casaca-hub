import { CarritoItem } from "../CarritoItem/CarritoItem";
import styles from "./CarritoList.module.css";

export function CarritoList({
  cart,
  onRemove,
  onUpdateQuantity,
  onClear,
  total,
  onCheckout,
}) {
  return (
    <div className={styles.listContainer}>
      <h2 className={styles.title}>Tu carrito de compras</h2>

      <div className={styles.itemsWrapper}>
        {cart.map((item) => (
          <CarritoItem
            key={item.id}
            item={item}
            onRemove={onRemove}
            onUpdateQuantity={onUpdateQuantity}
          />
        ))}
      </div>

      <div className={styles.summaryContainer}>
        <button className={styles.btnClear} onClick={onClear}>
          Vaciar carrito
        </button>

        <div className={styles.totalSection}>
          <span className={styles.totalLabel}>Total:</span>
          <span className={styles.totalAmount}>${total.toLocaleString()}</span>
        </div>
      </div>

      <div className={styles.checkoutWrapper}>
        <button className={styles.btnCheckout} onClick={onCheckout}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}
