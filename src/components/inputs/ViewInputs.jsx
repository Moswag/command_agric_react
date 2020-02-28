import React, { Component } from 'react'
import Footer from '../../partials/Footer'
import NavBar from '../../partials/NavBar'
import Sidebar from '../../partials/Sidebar'

import InputService from '../../service/InputService'
import InputTable from './InputTable'

class ViewInputs extends Component {
    state={
        inputs:[],
        message:null
    }

    componentDidMount(){
        InputService.fetchInputs().then(res=>{
            this.setState({
                inputs:res.data.result,
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
            <h2 className="pageheader-title">Inputs</h2>
            <p className="pageheader-text">Current Stock</p>
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
              <h5 className="mb-0">Inputs</h5>
            
            </div>
            <div className="card-body">
              <InputTable inputs={this.state.inputs}/>
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

export default ViewInputs