import {useParams} from 'react-router-dom'
const PurchaseOrderDetails = (props) => {
    const { vendors, updateVendor, deleteVendor, purchaseOrder} = props
    let { id } = useParams();
    const vendor = vendors.find(x => x.id === parseInt(id))
    const pO = purchaseOrder.find(x => x.vendor_id === vendor.id)
    console.log(vendor)
    console.log('PO:', purchaseOrder)
    console.log('PO 2 :', pO)

    return (
    <div className='show-purchaseorder'>
        <div className='top-and-bottom'>
            <div className='top'>{vendor.name}</div>
            <br></br>
            <div className='buttom'>
                <div>Amount: {pO.Amount}</div>
                <div>Quantity: {pO.Quantity}</div>
                <div>Total: {pO.Amount * pO.Quantity}</div>
            </div>
        </div>
        
    </div>
    )
}

export default PurchaseOrderDetails