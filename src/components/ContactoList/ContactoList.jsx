import { Contacto } from "../Contacto/Contacto";
import styles from "./ContactoList.module.css";

export function ContactoList({ contactos }) {
  return (
    <div className={styles.contactos}>
      {contactos.map((contacto) => (
        <Contacto key={contacto.id} {...contacto} />
      ))}
    </div>
  );
}
