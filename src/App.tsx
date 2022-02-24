import styled from "styled-components";
import "./App.css";
import { GlobalStyled } from "./Components/GlobalStyled";
import { Header } from "./Components/Header";
import { ItemCard } from "./Components/ItemCard";
import { ContainerStyled } from "./Components/UI/index";
import { CartComponent } from "./Components/CartComponent/index";

function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <Header />

      {/* <ContainerStyled>
        <ItemCard />
        <ItemCard />
      </ContainerStyled> */}

      <CartComponent />
    </div>
  );
}

export default App;
