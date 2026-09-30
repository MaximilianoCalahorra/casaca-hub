import { useState, useEffect } from "react";
import { ContactoList } from "../ContactoList/ContactoList";
import styles from "./ContactoListContainer.module.css";

export function ContactoListContainer({ mensaje }) {
  // Contactos:
  const [contactos, setContactos] = useState([]);

  // Resultados:
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("/data/nosotros.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información de los contactos");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setContactos(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p>Cargando equipo...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2 className={styles.title}>{mensaje}</h2>
      <ContactoList contactos={contactos} />
    </div>
  );
}
