import { BrowserRouter } from "react-router-dom";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
import BackgroundBokeh from "./components/BackgroundBokeh";  

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <BackgroundBokeh />
        <Experience />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
