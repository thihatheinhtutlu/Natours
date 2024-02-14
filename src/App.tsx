import React from 'react';
// import logo from './logo.svg';
import './index.scss'
import Navigation from './components/navigation/navigation';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
