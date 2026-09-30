import { useState } from "react";
import styles from "./NewsletterForm.module.css";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [suscripto, setSuscripto] = useState(false);

  // Manejar envío del formulario:
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setEmail("");
    setSuscripto(true);

    // Hacemos que el mensaje de confirmación dure 3 segundos:
    setTimeout(() => {
      setSuscripto(false);
    }, 3000);
  };

  return (
    <form className={styles.newsletterForm} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          type="email"
          placeholder="Tu email..."
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className={styles.button}>
          Unirse
        </button>
      </div>

      {suscripto && (
        <p className={styles.successMessage}>✓ ¡Gracias por suscribirte!</p>
      )}
    </form>
  );
}
