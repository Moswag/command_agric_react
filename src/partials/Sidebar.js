import React from 'react'
import {NavLink} from 'react-router-dom';
import AuthService from '../service/AuthService';

export default function Sidebar() {
    return (
    <div className="nav-left-sidebar sidebar-dark">
    <div className="menu-list">
      <nav className="navbar navbar-expand-lg card-img-3">
        <a className="d-xl-none d-lg-none" href="#">Dashboard</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-column">
            <li className="nav-divider">
              {AuthService.getUserInfo().username}
            </li>
            <li className="nav-item ">
              <a className="nav-link active" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i className="fa fa-fw fa-user-circle" />User</a>
              <div id="submenu-1" className="collapse submenu" style={{}}>
                <ul className="nav flex-column">
                 
                  <li className="nav-item">
                    <NavLink className="nav-link" to="add_user">Add User</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="view_users">Users List</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2"><i className="fa fa-fw fa-rocket" />Crop</a>
              <div id="submenu-2" className="collapse submenu" style={{}}>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="add_crop">Add Crop</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="view_crops">Crops List</NavLink>
                  </li>
                  
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-3" aria-controls="submenu-3"><i className="fas fa-fw fa-chart-pie" />Farm</a>
              <div id="submenu-3" className="collapse submenu" style={{}}>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <NavLink to="add_farm" className="nav-link">Add Farm</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="view_farms" className="nav-link">View Farms</NavLink>
                  </li>
        
                </ul>
              </div>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-4" aria-controls="submenu-4"><i className="fab fa-fw fa-wpforms" />Farmer</a>
              <div id="submenu-4" className="collapse submenu" style={{}}>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <NavLink to="add_farmer" className="nav-link">Add Farmer</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="view_farmers" className="nav-link">View Farmers</NavLink>
                  </li>
                
                </ul>
              </div>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-14" aria-controls="submenu-14"><i className="fab fa-fw fa-wpforms" />Distribution</a>
              <div id="submenu-14" className="collapse submenu" style={{}}>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <NavLink to="add_distribution" className="nav-link">Add Distribution</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="view_distributions" className="nav-link">View Distributions</NavLink>
                  </li>
                
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-5" aria-controls="submenu-5"><i className="fas fa-fw fa-table" />Inputs</a>
              <div id="submenu-5" className="collapse submenu" style={{}}>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <NavLink to="add_input" className="nav-link">Add Inputs</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="view_inputs" className="nav-link">View Inputs</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            
            <li className="nav-divider">
              Features
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-6" aria-controls="submenu-6"><i className="fas fa-fw fa-file" />Soil Type</a>
              <div id="submenu-6" className="collapse submenu" style={{}}>
                <ul className="nav flex-column">
                  <li className="nav-item">
                  <NavLink className="nav-link" to="add_soil_type">Add Soil Type</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="view_soil_types" className="nav-link" href="blank-page-header.html">View Soil Types</NavLink>
                  </li>
                  
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-7" aria-controls="submenu-7"><i className="fas fa-fw fa-inbox" />District</a>
              <div id="submenu-7" className="collapse submenu" style={{}}>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <NavLink to="add_district" className="nav-link">Add District</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="view_districts" className="nav-link">View Districts</NavLink>
                  </li>
                 
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-8" aria-controls="submenu-8"><i className="fas fa-fw fa-columns" />Yields</a>
              <div id="submenu-8" className="collapse submenu" style={{}}>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="icon-fontawesome.html">View Yields</a>
                  </li>
                  
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-9" aria-controls="submenu-9"><i className="fas fa-fw fa-map-marker-alt" />GMB Prices</a>
              <div id="submenu-9" className="collapse submenu" style={{}}>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <NavLink to="add_price" className="nav-link">Add GMB Prices</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="view_prices" className="nav-link">View GMB Prices</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-10" aria-controls="submenu-10"><i className="fas fa-f fa-folder" />Awards</a>
              <div id="submenu-10" className="collapse submenu" style={{}}>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Add Competion Year</a>
                  </li>
                  
                  <li className="nav-item">
                    <a className="nav-link" href="#">View Awards</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
    )
}
