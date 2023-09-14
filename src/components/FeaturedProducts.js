import React, {useContext} from "react";
import { ProductsContext } from "../context/ProductosContext";
import Product from "./ProductCard";

export default function Products() {

  const { products } = useContext(ProductsContext);

  const filteredProducts = products.filter((x) => x.id < 10);

  return (
    <>
    <div className="col-md-9 py-md-3 container mt-5">
        <h1 className="text-center pb-5" style={{fontFamily:"cursive"}}>FEATURED</h1>
      <div className="row">
      {filteredProducts.map((product) => {
        return(
       <Product product={product} />
       )
      })}

      </div>
      </div>
    </>
  );
}
