import React from 'react'

const InputTable=({inputs})=> {

    const inputsList = inputs.map(input => {
        return (
                <tr key={input.id}>
                    <td>{input.id}</td>
                    <td>{input.cropId}</td>
                    <td>{input.quantity}</td>
                    <td>{input.date}</td>
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
                        <th>Quantity(Kgs)</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {inputsList}
                </tbody>
                <tfoot>
                <tr>
                        <th>Id</th>
                        <th>Crop</th>
                        <th>Quantity(Kgs)</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}


export default InputTable
