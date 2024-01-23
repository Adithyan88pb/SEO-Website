import React from "react";
import Header from "./Compnents/Header/Header";
import "./App.css";
import Home from "./Pages/Home/Home";
import Clients from "./Pages/Cilents/Clients";
import Footer from "./Compnents/Footer/Footer";
import CopyRight from "./Compnents/CopyRight/CopyRight";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Clients />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default App;
