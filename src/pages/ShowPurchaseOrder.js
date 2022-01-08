import React, { useState } from "react";
import { useParams} from "react-router-dom"

const ShowPurchaseOrder = ({ purchaseOrders, addPurchaseOrder, vendors}) => {
    const [purchaseOrderForm, setPurchaseOrderForm] = useState(purchaseOrders)
    let { id } = useParams();
    const vendor = vendors.find(x => x.id === parseInt(id))
    console.log(vendor)
    const handleChange = (e) => {
        if (e.target.placeholder === vendor.name) {
            setPurchaseOrderForm({ ...purchaseOrderForm, [e.target.name]: vendor.name })
        } else if (e.target.placeholder === vendor.currency) {
            setPurchaseOrderForm({ ...purchaseOrderForm, [e.target.name]: vendor.currency })
        } else if (e.target.placeholder === vendor.id) {
            setPurchaseOrderForm({ ...purchaseOrderForm, [e.target.name]: vendor.id })
        } else {
            setPurchaseOrderForm({ ...purchaseOrderForm, [e.target.name]: e.target.value })
        }
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        addPurchaseOrder(purchaseOrderForm)
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
                                placeholder={vendor.name}
                                name="VendorName"
                                onChange={handleChange}
                                value={purchaseOrderForm.VendorName}
                            />
                        </div>
                        <div className="vendor-input">
                            <h3>Vendor Currency: </h3>
                            <input
                                className="vendor-input-currency"
                                type="text"
                                placeholder="currency"
                                name="VendorCurrency"
                                value={purchaseOrderForm.VendorCurrency}
                            />
                        </div>
                        <div className="vendor-input">
                            <h3>Quantity: </h3>
                            <input
                                className="vendor-input-currency"
                                type="integer"
                                placeholder="Quantity"
                                name="Quantity"
                                onChange={handleChange}
                                value={purchaseOrderForm.Quantity}
                            />
                        </div>
                        <div className="vendor-input">
                            <h3>Amount: </h3>
                            <input
                                className="vendor-input-currency"
                                type="integer"
                                placeholder="Amount"
                                name="Amount"
                                onChange={handleChange}
                                value={purchaseOrderForm.Amount}
                            />
                        </div>
                        <div className="vendor-input">
                            <h3>Total: </h3>
                            <input
                                className="vendor-input-currency"
                                type="integer"
                                placeholder={purchaseOrderForm.Quantity * purchaseOrderForm.Amount}
                                name="Total"
                                onChange={handleChange}
                                value={purchaseOrderForm.Total}
                            />
                        </div>
                        <div className="vendor-input">
                            <h3>Expense Type: </h3>
                            <input
                                className="vendor-input-currency"
                                type="text"
                                placeholder="Expense Type"
                                name="ExpenseType"
                                onChange={handleChange}
                                value={purchaseOrderForm.ExpenseType}
                            />
                        </div>
                        <div className="vendor-input">
                            <h3>Vendor Id: </h3>
                            <input
                                className="vendor-input-currency"
                                type="integer"
                                placeholder={vendor.id}
                                name="vendor_id"
                                onChange={handleChange}
                                value={purchaseOrderForm.vendor_id}
                            />
                        </div>
                            <input
                                className="submission-purchaseorder"
                                type="submit">

                            </input>
                        
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ShowPurchaseOrder