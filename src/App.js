import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Head from "./components/head";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Hero from "./components/Hero";

function App() {
  // Global States & Variables
  const [isLogin] = useState(false);
  const [search, setSearch] = useState("");
  let mb = 12;

  // setter functions

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <header className={`sticky top-0 z-50 mb-${mb}`}>
          <Head search={search} setSearch={setSearch} />
        </header>

        <main className="flex-grow flex flex-col gap-8">
          <Routes>
            <Route path="/menu" element={<Menu islogin={isLogin} />} />
            <Route path="/home" element={<Hero />} />
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
