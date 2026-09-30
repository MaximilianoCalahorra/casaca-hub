import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Inicio } from "./components/Inicio/Inicio";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CarritoListContainer } from "./components/CarritoListContainer/CarritoListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

import "./App.css";

export function App() {
  // Carrito:
  const [cart, setCart] = useState([]);

  // Favoritos:
  const [favoritos, setFavoritos] = useState([]);

  // Productos:
  const [productos, setProductos] = useState([]);

  // Cargar productos:
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/data/productos.json`)
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información de los productos");
        }
        return respuesta.json();
      })
      .then((datos) => setProductos(datos))
      .catch((error) => error(error));
  }, []);

  // Competiciones:
  const [competiciones, setCompeticiones] = useState([]);

  // Carga de competiciones:
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/data/competiciones.json`)
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error(
            "No se pudo cargar la información de las competiciones",
          );
        }
        return respuesta.json();
      })
      .then((datos) => setCompeticiones(datos))
      .catch((error) => error(error));
  }, []);

  // Descontar stock:
  const handleDescontarStock = (cart) => {
    setProductos((prevProductos) =>
      prevProductos.map((prod) => {
        const itemEnCarrito = cart.find((item) => item.id === prod.id);

        if (itemEnCarrito) {
          return {
            ...prod,
            stock: Math.max(0, prod.stock - itemEnCarrito.cantidad),
          };
        }
        return prod;
      }),
    );
  };

  // Marcar como favorito / no favorito:
  const handleToggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  // Total de unidades del carrito:
  const totalUnidades = cart.reduce((acc, item) => acc + item.cantidad, 0);

  // Agregar ítem al carrito:
  const handleAddToCart = (itemAgregado) => {
    setCart((prevCart) => {
      const existe = prevCart.find((item) => item.id === itemAgregado.id);

      if (existe) {
        // Sumamos la cantidad actual con la nueva, sin pasar el stock máximo:
        const nuevaCantidad = Math.min(
          existe.cantidad + itemAgregado.cantidad,
          existe.stock,
        );

        return prevCart.map((item) =>
          item.id === itemAgregado.id
            ? { ...item, cantidad: nuevaCantidad }
            : item,
        );
      }

      // Si es un producto nuevo, nos aseguramos de que no supere el stock:
      const cantidadInicial = Math.min(
        itemAgregado.cantidad,
        itemAgregado.stock,
      );
      return [...prevCart, { ...itemAgregado, cantidad: cantidadInicial }];
    });
  };

  // Eliminar un item por ID:
  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Actualizar la cantidad de un producto:
  const handleUpdateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          // Garantizamos que la cantidad no sea menor a 1 ni supere el stock disponible:
          const cantidadValidada = Math.max(
            1,
            Math.min(newQuantity, item.stock),
          );
          return { ...item, cantidad: cantidadValidada };
        }
        return item;
      }),
    );
  };

  // Vaciar el carrito:
  const handleClearCart = () => {
    setCart([]);
  };

  // Calcular el total del carrito:
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0,
  );

  return (
    <Routes>
      <Route element={<Layout cartCount={totalUnidades} />}>
        <Route path="/" element={<Inicio competiciones={competiciones} />} />
        <Route
          path="/productos"
          element={
            <ItemListContainer
              productos={productos}
              competiciones={competiciones}
              mensaje="Catálogo de camisetas"
            />
          }
        />
        <Route
          path="/item/:id"
          element={
            <ItemDetailContainer
              productos={productos}
              onAddToCart={handleAddToCart}
              favoritos={favoritos}
              onToggleFavorito={handleToggleFavorito}
            />
          }
        />
        <Route
          path="/carrito"
          element={
            <CarritoListContainer
              cart={cart}
              onRemoveItem={handleRemoveItem}
              onUpdateQuantity={handleUpdateQuantity}
              onClearCart={handleClearCart}
              totalPrice={totalPrice}
              onFinalizarCompra={handleDescontarStock}
            />
          }
        />
      </Route>
    </Routes>
  );
}
