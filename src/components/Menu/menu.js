import { useEffect } from "react";
import Coffee from "./coffeeCard";

function Menu({ handleSearchBarRender, filteredItems, updateCart }) {
  useEffect(() => {
    handleSearchBarRender(true);
  }, [handleSearchBarRender]);

  return (
    <>
      {/* {console.log(filteredItems)} */}

      <div
        className={`grid gap-8 px-4 w-full  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  pt-8  rounded-lg`}
        id="menu"
      >
        {filteredItems.map((coffee) => (
          <Coffee
            name={coffee.name}
            price={coffee.price}
            img={coffee.img}
            key={coffee.id}
            updateCart={updateCart}
            id={coffee.id}
          />
        ))}
      </div>
    </>
  );
}

export default Menu;
