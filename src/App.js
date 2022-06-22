import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Planetaire from "./pages/Planetaire";
import "./styles/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/planetaire" element={<Planetaire/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
