import React from 'react'

const FarmTable=({farms})=> {

    const farmsList = farms.map(farm => {
        return (
                <tr key={farm.id}>
                    <td>{farm.id}</td>
                    <td>{farm.farmId}</td>
                    <td>{farm.hectares}</td>
                    <td>{farm.districtId}</td>
                    <td>{farm.status}</td>
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
                        <th>Farm Id</th>
                        <th>Hectares</th>
                        <th>District</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {farmsList}

                </tbody>
                <tfoot>
                <tr>
                        <th>Id</th>
                        <th>Farm Id</th>
                        <th>Hectares</th>
                        <th>District</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}


export default FarmTable
