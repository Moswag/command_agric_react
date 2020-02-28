import React from 'react'

const DistributionTable=({distributions})=> {

    const distributionList = distributions.map(distribution => {
        return (
                <tr key={distribution.id}>
                    <td>{distribution.id}</td>
                    <td>{distribution.districtId}</td>
                    <td>{distribution.date}</td>
                    <td>{distribution.status}</td>
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
                        <th>District</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {distributionList}

                </tbody>
                <tfoot>
                <tr>
                        <th>Id</th>
                        <th>District</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}


export default DistributionTable
