import { useState, useEffect } from "react";
import { CompeticionFilter } from "../CompeticionFilter/CompeticionFilter";
import { ItemList } from "../ItemList/ItemList";
import { Paginacion } from "../Paginacion/Paginacion";
import styles from "./ItemListContainer.module.css";

export function ItemListContainer({
  mensaje,
  productos = [],
  competiciones = [],
}) {
  // Filtros:
  const [competicionSeleccionada, setCompeticionSeleccionada] =
    useState("todas");
  const [busqueda, setBusqueda] = useState("");

  // Paginación:
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 10;

  // Función para llevar el scroll al inicio del contenido de la vista:
  const scrollToTopSmooth = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Cuando se selecciona una competición:
  useEffect(() => {
    if (competicionSeleccionada) {
      scrollToTopSmooth();
    }
  }, [competicionSeleccionada]);

  // Cuando se usa la barra de búsqueda:
  useEffect(() => {
    if (busqueda.trim() !== "") {
      scrollToTopSmooth();
    }
  }, [busqueda]);

  // Handler que llevan a la página 1 al seleccionar una competición:
  const handleSelectCompeticion = (idCompeticion) => {
    setCompeticionSeleccionada(idCompeticion);
    setPaginaActual(1);
  };

  // Handler que lleva a la página 1 al buscar:
  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
    setPaginaActual(1); // Volvemos a la página 1 al escribir
  };

  // Handler para cambiar de página y subir suavemente la pantalla:
  const handlePageChange = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);

    // Desplaza la ventana hacia la parte superior:
    scrollToTopSmooth();
  };

  // Obtener ids de las competiciones de las cuales hay camisetas:
  const idsCompeticionesPresentes = Array.from(
    new Set(productos.map((p) => String(p.competicion)).filter(Boolean)),
  );

  // Obtener competiciones que matchean con las recolectadas a partir de las camisetas:
  const competicionesVisibles = competiciones.filter((comp) =>
    idsCompeticionesPresentes.includes(String(comp.id)),
  );

  // Filtrado combinando competición y búsqueda por nombre:
  const productosFiltrados = productos.filter((prod) => {
    const coincideCompeticion =
      competicionSeleccionada === "todas" ||
      String(prod.competicion) === String(competicionSeleccionada);

    const coincideNombre = prod.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase().trim());

    return coincideCompeticion && coincideNombre;
  });

  // Lógica de paginación sobre el resultado filtrado:
  const totalPaginas = Math.ceil(
    productosFiltrados.length / productosPorPagina,
  );
  const ultimoIndice = paginaActual * productosPorPagina;
  const primerIndice = ultimoIndice - productosPorPagina;
  const productosPaginados = productosFiltrados.slice(
    primerIndice,
    ultimoIndice,
  );

  return (
    <div className={styles.headerContainer}>
      <CompeticionFilter
        competiciones={competicionesVisibles}
        competicionSeleccionada={competicionSeleccionada}
        onSelectCompeticion={handleSelectCompeticion}
      />

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar por equipo o camiseta..."
          value={busqueda}
          onChange={handleBusquedaChange}
          className={styles.searchInput}
        />
        {busqueda && (
          <button
            className={styles.clearSearchBtn}
            onClick={() => {
              setBusqueda("");
              setPaginaActual(1);
            }}
          >
            ✕
          </button>
        )}
      </div>

      <h2 className={styles.title}>{mensaje}</h2>

      {productosFiltrados.length === 0 ? (
        <p className={styles.emptySearch}>
          No se encontraron camisetas que coincidan con "{busqueda}".
        </p>
      ) : (
        <>
          <ItemList productos={productosPaginados} />

          <Paginacion
            paginaActual={paginaActual}
            totalPaginas={totalPaginas}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}
