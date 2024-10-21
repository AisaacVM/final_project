import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componenst/navegacion/navbar";
import Inicio from "./componenst/paginas/inicio";
import Gastos from "./componenst/paginas/gastos";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path="/inicio.jsx" exact Component={Inicio}></Route>
            <Route path="/gastos.jsx" exact Component={Gastos}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
