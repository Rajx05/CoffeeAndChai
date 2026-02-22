import { useState, useEffect } from "react";

export default function CartItems({ item }) {
  const [cartItems, setCartItems] = useState([]);

  // console.log(item);

  // Use an effect to add the 'item' prop to 'cartItems' when the component mounts
  // or when the 'item' prop itself changes.
  useEffect(() => {
    if (item) {
      setCartItems((prevItems) => [...prevItems, item]);
      // console.log("item added!");
    }
  }, []);
  // console.log(cartItems);

  return (
    <div>
      {cartItems.map((item) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
}
