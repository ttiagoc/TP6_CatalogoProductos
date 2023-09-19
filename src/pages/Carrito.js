import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import Product from "../components/ProductCard";

export default function Carrito() {
  const { productos, ResetCarrito } = useContext(CarritoContext);

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
              backgroundColor: "#0a4275",
              fontWeight: "bold",
              color:'white'
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
