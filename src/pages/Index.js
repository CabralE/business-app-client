import React from "react";
import Sidebar from "../components/Sidebar";
import PoForm from "../components/PoForm";
import VendorForm from "../components/VendorForm";

const Index = (props) => {
    
    const vendors = props.vendors

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
                    <PoForm />
                </div>
                <div className="vendorForm-container">
                    <VendorForm
                        vendors={vendors}
                    />
                </div>
            </div>
        </div>
    )
};

export default Index;