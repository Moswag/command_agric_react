import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import AuthService from '../service/AuthService'

class NavBar extends Component{

  logout=(e)=>{
    this.props.history.push('/');
    this.props.history.push('')
    AuthService.logOut();
  }
 
  render(){
    return (
        <div className="dashboard-header">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
          <img src="../assets/images/logo.png" style={{height:'40px'}} alt />
          <h2>Command Agriculture</h2>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto navbar-right-top">
              
        
              <li className="nav-item dropdown nav-user">
                <a className="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="../assets/images/user.png" alt className="user-avatar-md rounded-circle" /></a>
                <div className="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
                  <div className="nav-user-info">
    <h5 className="mb-0 text-white nav-user-name">{AuthService.getUserInfo().username}</h5>
                    <span className="status" /><span className="ml-2">Available</span>
                  </div>
                  <a className="dropdown-item" href="#"><i className="fas fa-user mr-2" />Account</a>
                  <a className="dropdown-item" href="#"><i className="fas fa-cog mr-2" />Change Password</a>
                  <button className="dropdown-item" onClick={this.logout} ><i className="fas fa-power-off mr-2" />Logout</button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
}
}

export default NavBar;
