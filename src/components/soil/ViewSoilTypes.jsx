import React, { Component } from 'react'
import SoilTypeTable from './SoilTable'
import SoilService from '../../service/SoilService'
import NavBar from '../../partials/NavBar'
import Sidebar from '../../partials/Sidebar'
import Footer from '../../partials/Footer'

class ViewSoilTypes extends Component {

  state={
    soil:[],
    message:null
}

componentDidMount(){
    SoilService.fetchSoilTypes().then(res=>{
        this.setState({
            soil:res.data.result,
            message: res.data.message
        })
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
                <p>This example shows DataTables and the Buttons extension being used with the Bootstrap 4 framework providing the styling.</p>
              </div>
              <div className="card-body">
                <SoilTypeTable soils={this.state.soil}  />
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

export default ViewSoilTypes
