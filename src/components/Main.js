import React from "react";
import Product from './Product'
function Main(props) {
  const { products, onAdd } = props;
  return (
    <div>
      <main className="block col-2">
        <h2>Products</h2>
        <div className="row">
          {products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Main;
