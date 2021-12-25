import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PoForm from "../components/PoForm";
import VendorForm from "../components/VendorForm";
import Footer from "../components/Footer";

const Index = (props) => {
    const vendors = props.vendors

    return (
        <div>
            <Header />
            <div className='body-container'>
                <div className="sidebar-container"> 
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
            <Footer />
        </div>
    )
};

export default Index;