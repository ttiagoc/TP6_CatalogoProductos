import React, { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext();

const CarritoProvider = (props) => {

    const [productos, setProductos] = useState([]);
    const cantidadProductos = productos.length

    const AddProduct = (producto) => {
        setProductos([...productos,
            producto])
    }

    const ResetCarrito = () => {
        setProductos([])
    }


    return (
        <CarritoContext.Provider
          value={{
            productos,
            cantidadProductos,
            AddProduct,
            ResetCarrito
          }}
        >
          {props.children}
        </CarritoContext.Provider>
      );


    
}



export default CarritoProvider;