import React, { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = (props) => {


    const [productos, setProductos] = useState([]);
    const cantidadProductos = productos.length

    useEffect(() => {
        
      if (localStorage.getItem("productos") != null) {
        let storage = localStorage.getItem("productos")
        setProductos(JSON.parse(storage))
    }
      },[])

  
    
    
    const AddProduct = (producto) => {
        setProductos([...productos, producto])
        
         addLocalStorage()
    }

    const addLocalStorage = () => {

      localStorage.setItem("productos",JSON.stringify(productos))

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