import React from 'react'
import AuthService from '../../service/AuthService';

const UserTable = ({ users,deleteUser }) => {

    const usersList = users.map(user => {
        const currentUser=AuthService.getUserInfo().username;
        if(user.username!==currentUser){
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                    <td>{user.access}</td>
                    <td>
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger" onClick={()=>{deleteUser(user.id)}}>Delete</button>
                        </td>
                </tr>
            )
        }
        
    })

    return (
        <div className="table-responsive">
            <table id="example" className="table table-striped table-bordered second" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Access</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {usersList}

                </tbody>
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Access</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default UserTable
