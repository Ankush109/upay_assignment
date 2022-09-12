import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productsdetails from "./components/Products/Productsdetails";
import Createproduct from "./components/Products/Createproduct";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allproductsaction } from "./Actions/Postaction";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:id" element={<Productsdetails />} />
          <Route path="/createproduct" element={<Createproduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
