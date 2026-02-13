import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Head from "./components/Navbar/head";
import Logo from "./components/Navbar/brandName";
import CartButton from "./components/Navbar/cartButton";
import NavLinks from "./components/Navbar/navLinks";
import SearchBar from "./components/Navbar/searchBar";

import Menu from "./components/Menu/menu";
import Footer from "./components/footer";
import Hero from "./components/Hero/Hero";
import Cart from "./components/Menu/cart";
import coffeeData from "./coffeeData.json";
import CartItems from "./components/Menu/cartItems";

function App() {
  // Global States & Variables
  const [isLogin] = useState(false);
  const [needSearch, setNeedSearch] = useState(false);

  const [filteredItems, setFilteredItems] = useState(coffeeData);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState("empty");

  // setter functions
  const handleSearchBarRender = (toggle) => {
    toggle ? setNeedSearch(true) : setNeedSearch(false);
  };

  const handleCartToggle = () => {
    setShowCart(!showCart);
  };

  const updateCart = (e) => {
    setCart(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <BrowserRouter>
      <div className="navbar sticky  z-50">
        <header className="mb-12">
          <Head>
            {/* NavBar */}
            <Logo />

            <SearchBar
              setFilteredItems={setFilteredItems}
              needSearch={needSearch}
              coffeeData={coffeeData}
            />

            <NavLinks />

            <CartButton handleCartToggle={handleCartToggle} />
          </Head>
        </header>

        <main>
          <Routes>
            <Route
              path="/menu"
              element={
                <>
                  <h1 className="text-2xl  sm:text-4xl font-bold font-pacifico text-center text-cream ">
                    Menu
                  </h1>
                  <div className="flex flex-row ">
                    <Menu
                      handleSearchBarRender={handleSearchBarRender}
                      coffeeData={coffeeData}
                      filteredItems={filteredItems}
                      updateCart={updateCart}
                    />

                    {showCart && (
                      <Cart>
                        <CartItems item={cart} />
                      </Cart>
                    )}
                  </div>
                </>
              }
            />
            <Route
              path="/"
              element={<Hero handleSearchBarRender={handleSearchBarRender} />}
            />
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
