// import { useState, useEffect } from "react";

export default function CartItems({ cart }) {
  // console.log(cart);
  return (
    <div>
      {cart.map((item) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
}
