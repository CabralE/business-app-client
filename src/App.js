import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom"
import Index from './pages/Index';
import ShowVendor from './pages/ShowVendor';
import ShowPurchaseOrder from './pages/ShowPurchaseOrder'
import PurchaseOrderDetails from './pages/PurchaseOrderDetails'
import Show from './pages/Show';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const url = 'https://ec-business-app-server.herokuapp.com/vendors/';
  const lru = 'https://ec-business-app-server.herokuapp.com/purchase_orders/';
  const [purchaseOrders, setPurchaseOrders] = useState([]);  
  const [vendors, setVendors] = useState([]);


  const vendorsToAdd = {
    name: "",
    currency: "",
  }

  const getVendors = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setVendors(data);
  }

  const getPurchaseOrders = async () => {
    const response = await fetch(lru);
    const data = await response.json();
    setPurchaseOrders(data);
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

  const addPurchaseOrder = async (newPurchaseOrder) => {
    await fetch(lru, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPurchaseOrder)
    })
    getPurchaseOrders();
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
    getPurchaseOrders()
  }, []);

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={
            <Index
              vendors={vendors}
              purchaseOrders={purchaseOrders}
            />
          } />
          <Route path="/newvendor" element={
            <ShowVendor
              vendors={vendors}
              addVendor={addVendor}
            />
          } />
          <Route path="/newpurchaseorder" element={
            <ShowPurchaseOrder
            purchaseOrders={purchaseOrders}
            addPurchaseOrder={addPurchaseOrder}
            
            />
          }/>
        <Route path="/purchase_orders/:id" element={
          <PurchaseOrderDetails
            vendors={vendors}
            updateVendor={updateVendor}
            deleteVendor={deleteVendor}
            purchaseOrder={purchaseOrders}
          />
        } />
          <Route path="/vendors/:id" element={
            <Show
              vendors={vendors}
              updateVendor={updateVendor}
              deleteVendor={deleteVendor}
              purchaseOrder={purchaseOrders}
            />
          }/>
        <Route path={`/vendors/:id/newpurchaseorder`} element={
          <ShowPurchaseOrder
            vendors={vendors}
            purchaseOrders={purchaseOrders}
            addPurchaseOrder={addPurchaseOrder}
          />
          } />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
