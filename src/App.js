import React from "react";
import Menu from "./components/Menu";
import ItemListContainer from "./components/ItemListContainer";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Menu />
      <ItemListContainer greeting="Olá, bem-vindo ao nosso site!" />
    </div>
  );
}

export default App;
