import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/Header"
import Home  from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Notfound from "./components/Notfound";
const App=()=>{
  return(
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="*" element={<Notfound />}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App