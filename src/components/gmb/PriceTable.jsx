import React from 'react'

const PriceTable=({prices})=> {

    const pricesList = prices.map(price => {
        return (
                <tr key={price.id}>
                    <td>{price.id}</td>
                    <td>{price.cropId}</td>
                    <td>{price.price}</td>
                    <td>
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger" >Delete</button>
                        </td>
                </tr>
            )
        
        
    })

    return (
        <div className="table-responsive">
            <table id="example" className="table table-striped table-bordered second" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Crop</th>
                        <th>Price Per KG</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {pricesList}

                </tbody>
                <tfoot>
                <tr>
                        <th>Id</th>
                        <th>Crop</th>
                        <th>Price Per KG</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}


export default PriceTable
