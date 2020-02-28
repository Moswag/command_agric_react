import React, { Component } from 'react'
import NavBar from '../../partials/NavBar';
import Sidebar from '../../partials/Sidebar';
import Footer from '../../partials/Footer';
import SoilService from '../../service/SoilService';

class AddSoilType extends Component {
    state={
        name:'',
        message:null
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        let soil = this.state
        SoilService.addSoil(soil).then(res=>{
            this.setState({
                message: res.data.message
            });
            alert(this.state.message);
        })
        
    }

    handleOnChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
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
                        <br /><br /><br /><br /><br /><br />
                        <br /><br />

                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header">
                                    <h2 className="pageheader-title">Soil Type Form </h2>
                                    <p className="pageheader-text">Add Soil Type</p>
                                    <div className="page-breadcrumb">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Home</a></li>
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Soil</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Add Soil Type</li>
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
                            {/* validation form */}
                            {/* ============================================================== */}

                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                                <div className="card" style={{width: 1000}}>
                                    <h5 className="card-header">Add Soil Type</h5>
                                    <div className="card-body">
                                        <form className="needs-validation" onSubmit={this.handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="name">Soil Type name</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="name"
                                                        placeholder="Soil Type name"
                                                        value={this.state.name}
                                                        name="name" onChange={this.handleOnChange} required />
                                                    
                                                </div>
                                            </div>
                                           
                                                        <div className="form-row">
                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                                <button className="btn btn-primary" type="submit">Save</button>
                                                            </div>
                                                        </div>
                                                   


                                        </form>
                                    </div>
                                </div>

                            </div>

                            {/* ============================================================== */}
                            {/* end validation form */}
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

export default AddSoilType
