import React from 'react'

const CropTable=({crops})=> {

    const cropsList = crops.map(crop => {
        return (
                <tr key={crop.id}>
                    <td>{crop.id}</td>
                    <td>{crop.name}</td>
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

                    {cropsList}

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


export default CropTable
