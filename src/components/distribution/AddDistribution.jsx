import React, { Component } from 'react'
import CropService from '../../service/CropService';
import Footer from '../../partials/Footer';
import NavBar from '../../partials/NavBar';
import Sidebar from '../../partials/Sidebar';
import FarmService from '../../service/FarmService';
import DistrictService from '../../service/DistrictService';
import DistributionService from '../../service/DistributionService';

class AddDistribution extends Component {
    state = {
        districtId:'',
        date:'',
        status:'Pending',
        districts:[],
        message: null
    }

    componentDidMount(){
        DistrictService.fetchDistricts().then(res=>{
            const districts=res.data.result;
            this.setState({
                districts
            })
        })
     
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let distribution = this.state;
        DistributionService.addDistribution(distribution).then(res => {
            this.setState({
                message: res.data.message
            })

            alert(this.state.message);
            if (res.data.status === 200) {
                this.props.history.push('view_distributions');
            }
        })


    }


    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const districtsList=this.state.districts.map(district=>{
            return (
            <option key={district.id} value={district.id}>{district.name}</option>
            )
        })
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
                                    <h2 className="pageheader-title">Distribution Form </h2>
                                    <p className="pageheader-text">Add Distribution</p>
                                    <div className="page-breadcrumb">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Home</a></li>
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Distribution</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Add Distribution</li>
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
                                    <h5 className="card-header">Add Distribution</h5>
                                    <div className="card-body">
                                        <form className="needs-validation" onSubmit={this.handleSubmit}>
                                            
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="districtId">District</label>
                                                    <select type="text"
                                                        className="form-control"
                                                        id="districtId"
                                                        value={this.state.districtId}
                                                        name="districtId" onChange={this.handleOnChange} required >
                                                            <option value="">Select One</option>
                                                            {districtsList}
                                                            </select>
                                                    
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="date">Date</label>
                                                    <input type="date"
                                                        className="form-control"
                                                        id="date"
                                                        value={this.state.date}
                                                        name="date" onChange={this.handleOnChange} required />
                                                    
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

export default AddDistribution
