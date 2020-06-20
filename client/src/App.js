import React from 'react';
import NavBar from './components/Navbar.component';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
    
  );
}

export default App;
