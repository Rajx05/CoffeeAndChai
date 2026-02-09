import { useEffect } from "react";
import Coffee from "./coffee";

function Menu({ islogin, handleSearchBarRender, filteredItems }) {
  useEffect(() => {
    handleSearchBarRender(true);
  }, []);

  return (
    <>
      {/* {console.log(filteredItems)} */}

      <h1 className="text-2xl mt-8 sm:text-4xl font-bold font-pacifico text-center text-cream ">
        Menu
      </h1>
      <div
        className="grid place-items-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-5 border-2 border-cream p-3 pt-5  rounded-lg"
        id="menu"
      >
        {filteredItems.map((coffee) => (
          <Coffee
            name={coffee.name}
            price={coffee.price}
            img={coffee.img}
            login={islogin}
            key={coffee.id}
          />
        ))}
      </div>
    </>
  );
}

export default Menu;
