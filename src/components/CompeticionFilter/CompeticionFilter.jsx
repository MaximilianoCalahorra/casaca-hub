import styles from "./CompeticionFilter.module.css";

export function CompeticionFilter({
  competiciones,
  competicionSeleccionada,
  onSelectCompeticion,
}) {
  return (
    <div className={styles.filterContainer}>
      <span className={styles.label}>Filtrar por competición:</span>
      <div className={styles.buttonGroup}>
        <button
          className={`${styles.filterBtn} ${competicionSeleccionada === "todas" ? styles.active : ""}`}
          onClick={() => onSelectCompeticion("todas")}
        >
          Todas
        </button>

        {competiciones.map((comp) => (
          <button
            key={comp.id}
            className={`${styles.filterBtn} ${competicionSeleccionada === comp.id ? styles.active : ""}`}
            onClick={() => onSelectCompeticion(comp.id)}
          >
            {comp.nombre}
          </button>
        ))}
      </div>
    </div>
  );
}
