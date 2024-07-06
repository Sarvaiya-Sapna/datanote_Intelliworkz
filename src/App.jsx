import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from "./hoc/components/header/header";
import Footer from "./hoc/components/footer/footer";
import Home from "./features/home/component/home";
const App = () => {
return(
  <Router>
    <Header/>
     <Routes>
     <Route path="/" element={<Home />} />
     </Routes>
     <Footer/>
    </Router>
)
}

export default App;
