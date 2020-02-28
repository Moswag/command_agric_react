import React, { Component } from 'react'
import Footer from '../../partials/Footer'
import Sidebar from '../../partials/Sidebar'
import NavBar from '../../partials/NavBar'
import UserService from '../../service/UserService';
import UserTable from './UserTable';
import AuthService from '../../service/AuthService';

export default class ViewUsers extends Component {
    constructor(props){
        super(props);
        this.state={
            users: [],
            message: null
        }
    }

    componentDidMount(){
        UserService.fetchUsers().then(res=>{  
            const users=res.data.result;
            this.setState({
                users
            })
        })
    }

    deleteUser=(id)=>{
      UserService.deleteUser(id).then(res=>{
        const message=res.data.message;
        const users=this.state.users.filter(user=>{
          return user.id !== id;
        })
        this.setState({
          message,
          users
        });

        alert(message);
      })
      

    }


    render() {
        
        
        return (
            

  <div className="dashboard-main-wrapper">
    {/* ============================================================== */}
    {/* navbar */}
    {/* ============================================================== */}
            <NavBar />
    {/* ============================================================== */}
    {/* end navbar */}
    {/* ============================================================== */}
    {/* ============================================================== */}
            <Sidebar />
    {/* ============================================================== */}
    {/* ============================================================== */}
    {/* wrapper  */}
    {/* ============================================================== */}
    <div className="dashboard-wrapper">
      <div className="container-fluid  dashboard-content">
        {/* ============================================================== */}
        {/* pageheader */}
        {/* ============================================================== */}
        <br/><br/>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="page-header">
              <h2 className="pageheader-title">Data Tables</h2>
              <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
              <div className="page-breadcrumb">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Tables</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Data Tables</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* end pageheader */}
        {/* ============================================================== */}
       
   
       
        <div className="row">
          {/* ============================================================== */}
          {/* data table  */}
          {/* ============================================================== */}
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card" style={{width: 1000}}>
              <div className="card-header">
                <h5 className="mb-0">Users</h5>
                 </div>
              <div className="card-body">
                <UserTable users={this.state.users} deleteUser={this.deleteUser} />
              </div>
            </div>
          </div>
          {/* ============================================================== */}
          {/* end data table  */}
          {/* ============================================================== */}
        </div>
  
      </div>
      {/* ============================================================== */}
      {/* footer */}
      {/* ============================================================== */}
      <Footer />
      {/* ============================================================== */}
      {/* end footer */}
      {/* ============================================================== */}
    </div>

</div>

           
        )
    }
}
