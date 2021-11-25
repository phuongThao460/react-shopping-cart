import React from "react";

function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const array = [];
  const price = [];
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemPrice * 0.14;
  const shippingPrice = itemPrice > 2000 ? 0 : 50;
  const totalPrice = itemPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Item</h2>
      <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
      {cartItems.map((item) => (
        <div className="row" key={item.id}>
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} X ${item.price.toFixed(2)}
          </div>
          ]
          {array.push({
            id: item.id,
            name: item.name,
            qty: item.qty,
            price: item.price.toFixed(2),
          })}
          {console.log(array)}
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div className="col-1">Item Price</div>
            <div className="col-2 text-right">${itemPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-1">Tax Price</div>
            <div className="col-2 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-1">Shipping Price</div>
            <div className="col-2 text-right">${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="row">
            <button onClick={() => alert("Item was checkout")}>
              Check Out
            </button>
          </div>
          {price.push({
            priceItem: itemPrice.toFixed(2),
            tax: taxPrice.toFixed(2),
            ship: shippingPrice.toFixed(2),
            total: totalPrice.toFixed(2)
          })}
          {console.log(price)}
        </>
      )}
    </aside>
  );
}

export default Basket;
