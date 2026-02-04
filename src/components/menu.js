import Coffee from "./coffee";

// sample coffee data
const coffeeData = [
  {
    id: 1,
    name: "Cappuchino",
    price: 220,
    img: "/productImages/cappuchino.png",
  },
  {
    id: 2,
    name: "Kulhad Chai",
    price: 40,
    img: "/productImages/kulhadChai.png",
  },
  {
    id: 3,
    name: "Espresso",
    price: 140,
    img: "/productImages/espresso.png",
  },
  {
    id: 4,
    name: "Latte",
    price: 210,
    img: "/productImages/latte.png",
  },
  {
    id: 5,
    name: "Mocha",
    price: 240,
    img: "/productImages/mocha.png",
  },
  {
    id: 6,
    name: "Americano",
    price: 180,
    img: "/productImages/americano.png",
  },
  {
    id: 7,
    name: "Macchiato",
    price: 200,
    img: "/productImages/macchiato.png",
  },
  {
    id: 8,
    name: "Cortado",
    price: 190,
    img: "/productImages/cortado.png",
  },
  {
    id: 9,
    name: "Masala Chai",
    price: 60,
    img: "/productImages/masalaChai.png",
  },
  {
    id: 10,
    name: "Kashmiri Kahwa",
    price: 150,
    img: "/productImages/kashmiriKahwa.png",
  },
  {
    id: 11,
    name: "Noon Chai",
    price: 130,
    img: "/productImages/noonChai.png",
  },
];

function Menu({ islogin }) {
  return (
    <>
      <h1 className="text-2xl mt-8 sm:text-4xl font-bold font-pacifico text-center text-cream ">
        Menu
      </h1>
      <div
        className="grid place-items-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-5 border-2 border-cream p-3 pt-5  rounded-lg"
        id="menu"
      >
        {/* Conditional Rendering */}
        {coffeeData.map((coffee) => (
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
