import { Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page";
import PokemonPage from "./pages/pokemon-page";
import './index.css'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="pokemon/:id" element={<PokemonPage/>}/>
        <Route path="*" element={<HomePage/>}/>
      </Routes>
    </>
  );
}

export default App;
