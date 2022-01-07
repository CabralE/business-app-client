import React from "react";
import { Link } from "react-router-dom";

const PoForm = (props) => {
    const purchaseOrders = props.purchaseOrders

    return (
        purchaseOrders.map((po) => (
        <Link to={`/purchase_orders/${po.id}`} className="sidebar-vendors">
            PO{po.id} 
        </Link>
    )))
};

export default PoForm;