import React, {useState} from "react";
import {Link} from "react-router-dom"

const ShowVendor = ({ vendors, addVendor}) => {

    const [vendorForm, setVendorForm] = useState(vendors)

    const handleChange = (e) => {
        setVendorForm({...vendorForm, [e.target.name]: e.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        let count = 0
        for (const vendor of vendors) {
            if (vendor.name === vendorForm.name) {
                count += 1
            }
        }
        if (count <= 0) {addVendor(vendorForm)}
        count = 0
        // history.push("/")
    }
    
    return (
        <div className="show-vendor">
            <div>
                <form className="vendor-form-input" onSubmit={handleSubmission}>
                    <div className="vendor-input-container">
                        <div className="vendor-input">
                            <h3>Vendor name:</h3>
                            <input
                                className="vendor-input-money"
                                type="text"
                                placeholder="Name"
                                name="name"
                                onChange={handleChange}
                                value={vendorForm.name}
                            />
                        </div>
                        <div className="vendor-input">
                            <h3>Currency: </h3>
                            <input
                                className="vendor-input-currency"
                                type="text"
                                placeholder="Currency"
                                name="currency"
                                onChange={handleChange}
                                value={vendorForm.currency}
                            />
                        </div>
              
                    </div>
                    <Link to="/">
                        <input type="submit">
                        </input>
                    </Link>

                </form>
            </div>
        </div>

    )
}

export default ShowVendor