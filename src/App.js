import { useState } from "react";
import "./App.css";
import Head from "./components/head";
import Menu from "./components/menu";
import Footer from "./components/footer";
import PageNav from "./components/pageNav";
import Highlights from "./components/highlights";

function App() {
  // Global States
  const [page, setPage] = useState(0);
  const [isLogin] = useState(false);
  const [search, setSearch] = useState("");

  // setter functions
  function setter() {
    setPage((p) => p + 1);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 mb-12">
        <Head search={search} setSearch={setSearch} />
      </header>

      <main className="flex-grow flex flex-col gap-8">
        <Highlights />
        <div id="menu">
          <Menu islogin={isLogin} />
        </div>
        <PageNav setter={setter} page={page} />
      </main>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
