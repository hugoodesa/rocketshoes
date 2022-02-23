import "./App.css";
import { GlobalStyled } from "./Components/GlobalStyled";
import { Header } from "./Components/Header";
import { ItemCard } from "./Components/ItemCard";

function App() {
  return (
    <div className='App'>
      <GlobalStyled />
      <Header />

      <ItemCard />
    </div>
  );
}

export default App;
