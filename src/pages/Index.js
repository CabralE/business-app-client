import React from "react";
import Sidebar from "../components/Sidebar";
import PoForm from "../components/PoForm";
import VendorForm from "../components/VendorForm";

const Index = (props) => {
    console.log('Index Props: ', props)
    const vendors = props.vendors
    const purchaseOrders = props.purchaseOrders

    return (
        <div>
            <div className='body-container'>
                <div className="sidebar-container"> 
                <h1>Vendors</h1>
                    <Sidebar 
                        vendors={vendors}
                    />
                </div>
                <div className="poForm-container">
                    <h1 className="po-header">Purchase Orders</h1>
                    <PoForm 
                        purchaseOrders={purchaseOrders}
                    />
                </div>

            </div>
        </div>
    )
};

export default Index;