import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { supabase } from "./supabaseClient";
import "./App.css";
import Head from "./components/Navbar/head.jsx";
import Logo from "./components/Navbar/brandName.jsx";
import CartButton from "./components/Navbar/cartButton.jsx";
import NavLinks from "./components/Navbar/navLinks.jsx";
import SearchBar from "./components/Navbar/searchBar.jsx";
import Login from "./components/login.jsx";
import SignUp from "./components/signUp.jsx";
import Menu from "./components/Menu/menu.jsx";
import Footer from "./components/footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Cart from "./components/Menu/cart.jsx";
import coffeeData from "./coffeeData.json";
import CartItems from "./components/Menu/cartItems.jsx";
import LoginButton from "./components/Navbar/loginButton.jsx";

const initialCart = [];

function App() {
  // Global States & Variables
  // const [isLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [needSearch, setNeedSearch] = useState(false);

  const [filteredItems, setFilteredItems] = useState(coffeeData);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState(initialCart);

  // SUPABASE
  useEffect(() => {
    // if user session exists
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      console.log("User session state: ", user);
    });
    // live listener
    supabase.auth.onAuthStateChange(async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      console.log("User session state: ", user);
    });
  }, []);

  // setter functions
  const handleSearchBarRender = (toggle) => {
    toggle ? setNeedSearch(true) : setNeedSearch(false);
  };

  const handleCartToggle = () => {
    setShowCart(!showCart);
  };

  const updateCart = (item) => {
    // console.log(item);
    setCart((prevCart) => [...prevCart, item]);
  };
  console.log("Cart Items:", cart);
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

            {/* Cart & Login button */}
            <div className="flex flex-row gap-2">
              <CartButton handleCartToggle={handleCartToggle} />
              <LoginButton />
            </div>
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
                      <Cart price={cart}>
                        <CartItems cart={cart} />
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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
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
