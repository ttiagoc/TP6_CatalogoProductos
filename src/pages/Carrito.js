import React, { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import Product from "../components/ProductCard";

export default function Carrito() {
  const { productos, ResetCarrito } = useContext(CarritoContext);

  console.log(productos);
  console.log(productos.length);
  console.log("es mayor: "+ productos.lenght > 1)

  if (productos.lenght > 1) {
    return (
      <div className="row">
        <button onClick={() => ResetCarrito()} style={{height:50, width:120, borderRadius:10, backgroundColor:'red'}}>Resetear Carrito</button>
        <button onClick={() => ResetCarrito()}></button>
                {productos.map((product, index) => {
          return <Product product={product} key={index} />;
        })}
      </div>
    );
  } else {
    if (productos.lenght === 1) {
      return (
        <div className="row">
            
          <Product product={productos[0]} key={0} />
        </div>
      );
    } else {
      return (
        <>
          <button onClick={() => ResetCarrito()} style={{height:50, width:120, borderRadius:10, backgroundColor:'red'}}>Resetear Carrito</button>
          <div>NO HAY PRODUCTOS</div>
        </>
      );
    }

    
  }


}
