import { useState, useEffect } from "react";

export default function CartItems({ item }) {
  const [cartItems, setCartItems] = useState([]);

  console.log(item);

  // Use an effect to add the 'item' prop to 'cartItems' when the component mounts
  // or when the 'item' prop itself changes.
  useEffect(() => {
    if (item) {
      // Ensure the 'item' prop exists
      setCartItems((prevItems) => [...prevItems, item]);
      console.log("item added!");
    }
  }, [item]); // Dependency array: re-run this effect if the 'item' prop changes.
  console.log(cartItems);

  return (
    <div>
      {cartItems.map((item) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
}
