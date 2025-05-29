import React from 'react';
import './App.css';
import Navigation from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Products from './components/products';
import Mission from './components/mission';
import Games from './components/gamesection';
import Recruitement from './components/recruitement';
import Footer from './components/footer';





function App() {
 

  return (
    <div>
     <Navigation/>
     <Hero/>
     <About/>
     <Products/>
     <Mission/>
     <Games/>
     <Recruitement/>
     <Footer/>
    </div>
  )
}

export default App
