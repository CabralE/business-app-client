import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
const Show = (props) => {
    const {vendors, updateVendor, deleteVendor} = props
    let {id} = useParams();
    const vendor = vendors.find(x => x.id === parseInt(id) )
    const [editVendor, setEditVendor] = useState(vendor)

    const handleChange = event => {
        setEditVendor({...editVendor, [event.target.name]: event.target.value})
    }
    const handleSubmit = event => {
        event.preventDefault()
        updateVendor(editVendor, vendor.id)
        props.history.push("/")
    }
    const removeVendor = () => {
        props.deleteVendor(vendor.id)
        props.history.push("/")
    } 
    console.log('editVendor: ', editVendor)
    return (
        <div className="show-container">
            <h3>Vendor: {vendor?.name}  </h3>
            <h3>Currency: {vendor?.currency}  </h3>

        <button id="delete-button" onClick={removeVendor}>
            delete
        </button>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={editVendor?.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
            />
            <input
            type="text"
            value={editVendor?.currency}
            name="currency"
            placeholder="currency"
            onChange={handleChange}
            />
            <input
            type="submit"
            value="Update Vendor"
            />
        </form>
        </div>
            
        
    )
}

export default Show

