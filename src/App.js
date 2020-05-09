import React from 'react';
import './App.css';
import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';
import { PubProvider } from './pubs/pubContext';

function App() {
  return (
  


    <div className="App">
  <Header />
  <Content />
  <Footer />
    </div>

    
  );
}

export default App;
