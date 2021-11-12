import React from "react";

export default function Header(props) {
  const { countCartItems } = props;
  return (
    <div>
      <header className="row block center">
        <div>
          <h1>
            <a href="/#">Small Shopping</a>
          </h1>
        </div>
        <div>
          <a href="/#">
            Cart{" "}
            {countCartItems ? (
              <button className="badge">{countCartItems}</button>
            ) : (
              ""
            )}
          </a>
          <a href="/#">Sign In</a>
        </div>
      </header>
    </div>
  );
}
