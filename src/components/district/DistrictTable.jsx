import React from 'react'

const DistrictTable=({districts})=> {

    const districtsList = districts.map(district => {
        return (
                <tr key={district.id}>
                    <td>{district.id}</td>
                    <td>{district.name}</td>
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

                    {districtsList}

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


export default DistrictTable
