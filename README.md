# ⚽ Casaca Hub — E-commerce de camisetas de fútbol

**Casaca Hub** es una aplicación web moderna y totalmente adaptativa desarrollada para la comercialización de camisetas de fútbol de los principales clubes y selecciones del mundo. El proyecto ofrece una experiencia de usuario fluida, navegación optimizada mediante _Single Page Application_ (SPA), filtrado inteligente de catálogo y un flujo completo de gestión de carrito de compras y checkout.

Desarrollado por **Maximiliano Calahorra** como pre-entrega para el programa **React-End JS** de **Talento Tech**.

---

## 🚀 Funcionalidades principales

### 🏷️ Navegación y catálogo

- **Barra de navegación dinámica (Header):** Incluye accesos directos a _Inicio_, _Productos_ y un acceso al _Carrito_ con contador de productos en tiempo real.
- **Exploración por competiciones:** Filtrado por ligas y torneos destacados (_Premier League, La Liga, Serie A, Bundesliga, Ligue 1, Liga Profesional, Brasileirão y Selecciones FIFA_).
- **Búsqueda en tiempo real:** Barra de búsqueda interactiva que filtra el catálogo por nombre de producto instantáneamente.
- **Paginación inteligente:** Visualización optimizada de 10 productos por página con manejo dinámico de elipsis (`...`) para facilitar la navegación en catálogos extensos.
- **Vista detallada de producto (`ItemDetail`):** Ficha ampliada con especificaciones técnicas, insignias de marca/categoría y control de stock disponible.

### 🛒 Carrito y checkout

- **Control estricto de stock:** Selección de unidades respetando el límite máximo disponible por producto (impide la adición o incremento si excede el stock).
- **Gestión flexible de ítems:** Permite incrementar, decrementar la cantidad o eliminar productos de forma individual.
- **Cálculo transparente:** Visualización clara de subtotales por ítem y el total consolidado de la compra.
- **Confirmación de orden:** Proceso de checkout que vacía el carrito y genera un resumen con número de orden único, cantidad de productos adquiridos y total abonado.
- **Vacioso global:** Opción para limpiar el carrito completo en un solo clic.

### 📩 Secciones complementarias

- **Footer informativo:** Información de sucursales físicas y contactos clave del equipo con avatares integrados.
- **Formulario de newsletter:** Módulo interactivo para suscripción de novedades vía correo electrónico.
- **UX y Scroll Management:** Control automático de posición de scroll (`ScrollToTop`) para transiciones suaves al cambiar de ruta o paginar.

---

## 🛠️ Tecnologías Utilizadas

- **Library:** [React 19](https://react.dev/)
- **Routing:** [React Router Dom v7](https://reactrouter.com/)
- **Bundler & Dev Tools:** [Vite 8](https://vitejs.dev/)
- **Styling:** CSS Modules (aislamiento de estilos por componente)
- **Code Quality:** ESLint v10

---

## 📂 Estructura del Proyecto

```text
casaca-hub/
├── public/
│   ├── data/                   # Archivos JSON (competiciones, productos, equipo)
│   └── images/                 # Recursos multimedia estáticos
├── src/
│   ├── assets/                 # Isologotipos y branding de la marca
│   ├── components/             # Componentes modulares con sus CSS Modules
│   │   ├── CarritoItem/
│   │   ├── CarritoList/
│   │   ├── CarritoListContainer/
│   │   ├── CompeticionFilter/
│   │   ├── Contacto/
│   │   ├── ContactoList/
│   │   ├── ContactoListContainer/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Inicio/
│   │   ├── Item/
│   │   ├── ItemDetail/
│   │   ├── ItemDetailContainer/
│   │   ├── ItemList/
│   │   ├── ItemListContainer/
│   │   ├── Layout/
│   │   ├── NewsletterForm/
│   │   ├── Paginacion/
│   │   └── ScrollToTop/
│   ├── App.jsx                 # Rutas y estado global elevado
│   ├── main.jsx                # Punto de entrada de React
│   └── index.css               # Estilos globales y reset
├── package.json
└── vite.config.js
```

---

## ⚙️ Instalación y configuración local

Si querés ejecutar este proyecto en tu entorno local, seguí estos pasos:

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/MaximilianoCalahorra/casaca-hub
   cd casaca-hub
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

   Abre http://localhost:5173 en tu navegador para ver la aplicación.

4. **Construir para producción:**

   ```bash
   npm run build
   ```

---

## 👤 Autor

- **Maximiliano Calahorra**
- **Proyecto**: Pre-entrega - Curso React JS
- **Institución**: Talento Tech
