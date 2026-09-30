import styles from "./Paginacion.module.css";

export function Paginacion({ paginaActual, totalPaginas, onPageChange }) {
  // Si hay solo una página no son necesarios los botones:
  if (totalPaginas <= 1) return null;

  // Obtener opciones de páginas:
  const obtenerNumerosPagina = () => {
    const paginas = [];
    const maxVisibles = 3;

    // CASO 1: Pocas páginas totales
    // Si el total de páginas entra cómodamente en la interfaz sin necesidad de acortar,
    // generamos la secuencia completa (ej: [1, 2, 3, 4, 5]).
    if (totalPaginas <= maxVisibles + 2) {
      for (let i = 1; i <= totalPaginas; i++) paginas.push(i);
    }
    // CASO 2: Muchas páginas totales (requiere elipsis "...")
    else {
      // 1. La primera página siempre está visible al inicio.
      paginas.push(1);

      // 2. Definimos el rango por defecto alrededor de la página actual (ej: [actual-1, actual, actual+1])
      let inicio = Math.max(2, paginaActual - 1);
      let fin = Math.min(totalPaginas - 1, paginaActual + 1);

      // 3. Ajustamos el rango cuando el usuario está en los extremos para no achicar la lista
      if (paginaActual <= 2) {
        // Cerca del inicio: forzamos mostrar hasta la página 4 (ej: 1, 2, 3, 4)
        fin = 4;
      } else if (paginaActual >= totalPaginas - 1) {
        // Cerca del final: forzamos mostrar 3 páginas antes de la última (ej: total-3, total-2, total-1)
        inicio = totalPaginas - 3;
      }

      // 4. Si hay un salto mayor a 1 entre la primera página y el inicio del rango, insertamos "..."
      if (inicio > 2) {
        paginas.push("...");
      }

      // 5. Agregamos las páginas del rango central calculado
      for (let i = inicio; i <= fin; i++) {
        paginas.push(i);
      }

      // 6. Si hay un salto entre el fin del rango y la última página, insertamos "..."
      if (fin < totalPaginas - 1) {
        paginas.push("...");
      }

      // 7. La última página siempre está visible al final.
      paginas.push(totalPaginas);
    }

    return paginas;
  };

  const numerosPagina = obtenerNumerosPagina();

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.pageBtn}
        onClick={() => onPageChange(paginaActual - 1)}
        disabled={paginaActual === 1}
      >
        ‹ Ant
      </button>

      {numerosPagina.map((item, index) =>
        item === "..." ? (
          <span key={`dots-${index}`} className={styles.dots}>
            ...
          </span>
        ) : (
          <button
            key={item}
            className={`${styles.pageBtn} ${
              paginaActual === item ? styles.active : ""
            }`}
            onClick={() => onPageChange(item)}
          >
            {item}
          </button>
        ),
      )}

      <button
        className={styles.pageBtn}
        onClick={() => onPageChange(paginaActual + 1)}
        disabled={paginaActual === totalPaginas}
      >
        Sig ›
      </button>
    </div>
  );
}
