import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import About from "./pages/about";
import Error from "./pages/error"; 
import Home from "./pages/home";
import SingleCocktail from "./pages/singlecocktail";

//navbar
import Navbar from "./components/navbar"

function App(){
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/pers_projects/coqtails' element={<Home/>}/>
        <Route path='/pers_projects/coqtails/about' element={<About/>}/>
        <Route path='/pers_projects/coqtails/singlecocktail:id' element={<SingleCocktail/>}/>
        <Route path='/pers_projects/coqtails/*' element={<Error/>}/>
      </Routes>
    </Router>
  )
}


export default App; 



