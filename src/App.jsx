import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Mission from './components/mission';
import Products from './components/products';
import  Positions from './components/recruitement';
import Games from './components/gamesection';
import Footer from './components/footer';


function App() {
 

  return (
    <div>
      <Navbar/>
       <Hero/>
       <br/>
       <About/>
       <Products/>
       <Mission/>
       <Games/>
       <Positions/>
       <Footer/>
    </div>
  )
}

export default App
