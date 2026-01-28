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
    <>
      <Head search={search} setSearch={setSearch} />
      <Highlights />
      <Menu islogin={isLogin} />
      <PageNav setter={setter} page={page} />
      <Footer />
    </>
  );
}

export default App;
