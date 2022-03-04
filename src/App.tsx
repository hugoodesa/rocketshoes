import "./App.css";
import { GlobalStyled } from "./Components/GlobalStyled";
import { Header } from "./Components/Header";
import { CarrinhoProvider } from "./Context";
import { RoutesComponent } from "./Routes";

function App() {
  return (
    <div className='App'>
      <CarrinhoProvider>
        <GlobalStyled />
        <Header />
        <RoutesComponent />
      </CarrinhoProvider>
    </div>
  );
}

export default App;
