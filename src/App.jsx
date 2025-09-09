import { Routes, Route } from "react-router-dom";
import Home from "../components/navbar/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/navbar/Footer";


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;