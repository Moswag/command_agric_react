import React, { Component } from 'react'
import Footer from '../../partials/Footer'
import NavBar from '../../partials/NavBar'
import Sidebar from '../../partials/Sidebar'
import DistributionTable from './DistributionTable'
import DistributionService from '../../service/DistributionService'

class ViewDistributions extends Component {
    state={
        distributions:[],
        message:null
    }

    componentDidMount(){
        DistributionService.fetchDistributions().then(res=>{
            this.setState({
                distributions:res.data.result,
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
            <h2 className="pageheader-title">Districts</h2>
            <p className="pageheader-text">Added Districts</p>
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
              <h5 className="mb-0">Districts</h5>
            
            </div>
            <div className="card-body">
              <DistributionTable distributions={this.state.distributions}/>
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

export default ViewDistributions