import "./style.css";
import React from "react";
import Dog from "./Component/Dogs";
import Header from "./Component/Header";
import Home from "./Component/HomeSection";
import { Router, Route, Routes } from 'react-router-dom'
import Cat from "./Component/Cats";
import Coffies from "./Component/Coffee";

const App = () => {
  return (
    
      <>
        <Header/>
          <Routes>
              <Route path="/Dogs" element={<Dog/>} />
              <Route path="/Coffee" element={<Coffies/>} />
              <Route path="/Cats" element={<Cat/>} />
              <Route path="/"     element={<Home/>} />

          </Routes>
      </>

    
  );
};

export default App;
