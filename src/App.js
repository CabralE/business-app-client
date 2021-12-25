import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from "react-router-dom"
import Index from './pages/Index';

function App() {

  const url = 'https://ec-business-app-server.herokuapp.com/vendors/';
  
  const [vendors, setVendors] = useState([])

  const vendorsToAdd = {
    name: "",
    currency: "",
  }

  const getVendors = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log('vendors: ', data);
    setVendors(data);
  }

  useEffect(() => {
    getVendors()
  }, []);

  return (
    <div className="App">
      <Index
        vendors={vendors}
      />

    </div>
  );
}

export default App;
