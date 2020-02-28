import React from 'react'

const SoilTypeTable=({soils})=> {

    const soilsList = soils.map(soil => {
        return (
                <tr key={soil.id}>
                    <td>{soil.id}</td>
                    <td>{soil.name}</td>
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
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {soilsList}

                </tbody>
                <tfoot>
                <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}


export default SoilTypeTable
