import React from 'react'

const FarmerTable=({farmers})=> {

    const farmersList = farmers.map(farmer => {
        return (
                <tr key={farmer.id}>
                    <td>{farmer.name} {farmer.surname}</td>
                    <td>{farmer.nationalId}</td>
                    <td>{farmer.phonenumber}</td>
                    <td>{farmer.email}</td>
                    <td>{farmer.address}</td>
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
                        <th>Name</th>
                        <th>National Id</th>
                        <th>Phonenumber</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {farmersList}

                </tbody>
                <tfoot>
                <tr>
                <th>Name</th>
                        <th>National Id</th>
                        <th>Phonenumber</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}


export default FarmerTable
