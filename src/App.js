import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom"
import Index from './pages/Index';
import ShowVendor from './pages/ShowVendor';
import Show from './pages/Show';
import Header from './components/Header';
import Footer from './components/Footer';

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
    setVendors(data);
  }

  const addVendor = async (newVendor) => {
     await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVendor)
    })
    getVendors();
  };

  const updateVendor = async (vendor, id) => {
    await fetch(url + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vendor),
    })
    getVendors()
  }

  const deleteVendor = async id => {
    await fetch(url + id, {
      method: "delete",
    })
    getVendors()
  }

  useEffect(() => {
    getVendors()
  }, []);

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={
            <Index
              vendors={vendors}
            />
          } />
          <Route path="/newvendor" element={
            <ShowVendor
              vendors={vendors}
              addVendor={addVendor}
            />
          } />
          <Route path="/vendors/:id" element={
            <Show
              vendors={vendors}
              updateVendor={updateVendor}
              deleteVendor={deleteVendor}
            />
          } />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
