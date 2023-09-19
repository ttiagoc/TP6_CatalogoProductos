import React, { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import Product from "../components/ProductCard";

export default function Carrito() {
  const { productos, ResetCarrito } = useContext(CarritoContext);

  console.log(productos);
  console.log(productos.length);
  console.log("es mayor: " + productos.lenght > 1);

  return (
    <>
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 className="pt-5" style={{ fontWeight: "bold" }}>
            CARRITO
          </h1>
          <button
            className="m-4"
            onClick={() => ResetCarrito()}
            style={{
              height: 50,
              width: 150,
              borderRadius: 10,
              backgroundColor: "yellow",
              fontWeight: "bold",
            }}
          >
            Resetear Carrito
          </button>
        </div>
        <div className="row">
          {productos.map((product, index) => {
            return <Product product={product} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}
