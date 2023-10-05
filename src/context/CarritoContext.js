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
        
      localStorage.setItem("productos", JSON.stringify([...productos, producto]))
    }

  

    const ResetCarrito = () => {
        setProductos([])
        localStorage.removeItem("productos")
    }

    const DeleteProduct = (deletedProduct) => {

      let newArray = productos.filter(producto => producto !== deletedProduct);
      setProductos(newArray);
      localStorage.setItem("productos", JSON.stringify(newArray));

    }
   

  
    return (
        <CarritoContext.Provider
          value={{
            productos,
            cantidadProductos,
            AddProduct,
            ResetCarrito,
            DeleteProduct
          }}
        >
          {props.children}
        </CarritoContext.Provider>
      );


    
}



export default CarritoProvider;