import React from 'react';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Body/Home/Home';
import Footer from './Components/Footer/Footer';
import Accessories from './Components/Body/Accessories/Accessories';
import Contact from './Components/Body/Contact/Contact';
import Gaming from './Components/Body/Gaming/Gaming';
import Laptops from './Components/Body/Laptops/Laptops';
import Ps from './Components/Body/PS/Ps';
import Tv from './Components/Body/TV/Tv';
import Phone from './Components/Body/Phone/Phone';
import Detailed from './Components/Body/Detailed/Detailed';
import About from './Components/Body/About/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/laptops' element={<Laptops/>}/>
        <Route path='/gaming' element={<Gaming/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/phone' element={<Phone/>}/>
        <Route path='/tv' element={<Tv/>}/>
        <Route path='/ps' element={<Ps/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detailed' element={<Detailed/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
