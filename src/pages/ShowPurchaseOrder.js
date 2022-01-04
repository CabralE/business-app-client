import React, { useState } from "react";

const ShowPurchaseOrder = ({ purchaseOrders, addPurchaseOrder}) => {
    const [purchaseOrderForm, setPurchaseOrderForm] = useState(purchaseOrders)

    const handleChange = (e) => {
        setPurchaseOrderForm({ ...purchaseOrderForm, [e.target.name]: e.target.value })
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
                                placeholder="Name"
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
                                placeholder="Currency"
                                name="VendorCurrency"
                                onChange={handleChange}
                                value={purchaseOrderForm.VendorCurrency}
                            />
                        </div>
                        <div className="vendor-input">
                            <h3>Quantity: </h3>
                            <input
                                className="vendor-input-currency"
                                type="integer"
                                placeholder="Currency"
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
                                placeholder="Currency"
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
                                placeholder="Currency"
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
                                placeholder="Currency"
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
                                placeholder="Currency"
                                name="vendor_id"
                                onChange={handleChange}
                                value={purchaseOrderForm.vendor_id}
                            />
                        </div>
                        <input type="submit">

                        </input>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ShowPurchaseOrder