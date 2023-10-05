import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import { CarritoContext } from '../context/CarritoContext';

export default function Product({ product, carrito }) {

  const {DeleteProduct } = useContext(CarritoContext);

  return (
    <>

      <div className="col-6 col-md-6 col-lg-4 mb-3" key={product.id}>

        <div className="card h-100">

          <img
            src={product.thumbnail}
            className="m-3"
            style={{ height: "300px", width: "auto", objectFit: "contain" }}
            alt={product.title}
          />
          <div className="m-3 mb-0">
            <small className="card-title">
              {product.title.substring(0, 50)}...
            </small>
          </div>
          <div style={{ marginTop: "auto" }}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="m-3">
                <b>${product.price}</b>
              </div>

              {carrito ? (
                  <button className="btn btn-sm m-3 border-primary">
                    <button onClick={() => DeleteProduct(product)}> <i class="fa fa-times" aria-hidden="true"></i></button>
                  </button>
                ) : (
                  <></>
                )}
              <NavLink
                
                to={`/product/${product.id}`}
              >
                <button className="btn btn-sm m-3 border-primary">
                <i className="fa fa-arrow-right text-muted"></i>
                </button>
                </NavLink>

                


              
            </div>
          </div>

        </div>
      </div>



    </>
  )
}


Product.propTypes = {

  product: PropTypes.object,

}