import React, { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = (props) => {


    const [productos, setProductos] = useState([]);
    const [id, setId] = useState(1)

    const cantidadProductos = productos.length

    useEffect(() => {
        
      if (localStorage.getItem("productos") != null) {
        let storage = localStorage.getItem("productos")
        setProductos(JSON.parse(storage))
        let idStorage = localStorage.getItem("id")
        setId(idStorage)
    }
      },[])

  
    
    
    const AddProduct = (producto) => {

      let productoId = {
        ...producto,
        id
      }


        setProductos([...productos, productoId])
        
      localStorage.setItem("productos", JSON.stringify([...productos, productoId]))
      localStorage.setItem("id",id)
      let nuevaId = parseInt(id) + 1
      setId(nuevaId)
      console.log(nuevaId)
    }

  

    const ResetCarrito = () => {
        setProductos([])
        setId(1)
        localStorage.removeItem("productos")
        localStorage.removeItem("id")
    }

    const DeleteProduct = (deletedProduct) => {

      let newArray = productos.filter(producto => producto.id !== deletedProduct.id);
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