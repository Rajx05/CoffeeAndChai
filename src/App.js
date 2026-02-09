import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Head from "./components/head";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Hero from "./components/Hero";

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

function App() {
  // Global States & Variables
  const [isLogin] = useState(false);
  const [search, setSearch] = useState("");
  const [needSearch, setNeedSearch] = useState(false);
  const [filteredItems, setFilteredItems] = useState(coffeeData);

  // setter functions
  const handleSearchBarRender = (toggle) => {
    toggle ? setNeedSearch(true) : setNeedSearch(false);
  };

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);

    const filteredProducts = coffeeData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilteredItems(filteredProducts);
    console.log(filteredProducts);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <header className={"sticky top-0 z-50 mb-12"}>
          <Head
            search={search}
            setSearch={setSearch}
            needSearch={needSearch}
            setFilteredItems={setFilteredItems}
            coffeeData={coffeeData}
            handleInputChange={handleInputChange}
          />
        </header>

        <main className="flex-grow flex flex-col gap-8">
          <Routes>
            <Route
              path="/menu"
              element={
                <Menu
                  islogin={isLogin}
                  handleSearchBarRender={handleSearchBarRender}
                  coffeeData={coffeeData}
                  filteredItems={filteredItems}
                />
              }
            />
            <Route path="/" element={<Hero />} />
          </Routes>
        </main>

        <footer className="mt-auto">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
