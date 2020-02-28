import React, { Component } from 'react'
import CropService from '../../service/CropService';
import Footer from '../../partials/Footer';
import NavBar from '../../partials/NavBar';
import Sidebar from '../../partials/Sidebar';
import FarmService from '../../service/FarmService';
import DistrictService from '../../service/DistrictService';
import FarmerService from '../../service/FarmerService';

class AddFarmer extends Component {
    state = {
        name: '',
        surname:'',
        email:'',
        nationalId:'',
        phonenumber:'',
        address:'',
        farmId:'',
        farms:[],
        message: null
    }

    componentDidMount(){
        FarmService.fetchFarms().then(res=>{
            const farms=res.data.result;
            this.setState({
                farms
            })
        })
     
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
        name: '',
        surname:'',
        email:'',
        nationalId:'',
        phonenumber:'',
        address:'',
        farmId:'',
    
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let farmer = this.state;
        FarmerService.addFarmer(farmer).then(res => {
            this.setState({
                message: res.data.message
            })

            alert(this.state.message);
            if (res.data.status === 200) {
                this.props.history.push('view_farmers');
            }
        })


    }


    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const farmsList=this.state.farms.map(farm=>{
            return (
            <option key={farm.id} value={farm.farmId}>{farm.farmId}</option>
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
                                    <h2 className="pageheader-title">Farmer Form </h2>
                                    <p className="pageheader-text">Add Farmer</p>
                                    <div className="page-breadcrumb">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Home</a></li>
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Farmer</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Add Farmer</li>
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
                                    <h5 className="card-header">Add Farmer</h5>
                                    <div className="card-body">
                                        <form className="needs-validation" onSubmit={this.handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="name">Name</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="name"
                                                        placeholder="Name"
                                                        value={this.state.name}
                                                        name="name" onChange={this.handleOnChange} required />
                                                    
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="surname">Surname</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="surname"
                                                        placeholder="Surname"
                                                        value={this.state.surname}
                                                        name="surname" onChange={this.handleOnChange} required />
                                                    
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email"
                                                        className="form-control"
                                                        id="email"
                                                        placeholder="Email"
                                                        value={this.state.email}
                                                        name="email" onChange={this.handleOnChange} required />
                                                    
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="surname">National Id</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="nationalId"
                                                        placeholder="National Id"
                                                        value={this.state.nationalId}
                                                        name="nationalId" onChange={this.handleOnChange} required />
                                                    
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="phonenumber">Phonenumber</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="phonenumber"
                                                        placeholder="Phonenumber"
                                                        value={this.state.phonenumber}
                                                        name="phonenumber" onChange={this.handleOnChange} required />
                                                    
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="phonenumber">Address</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="phonenumber"
                                                        placeholder="Address"
                                                        value={this.state.address}
                                                        name="address" onChange={this.handleOnChange} required />
                                                    
                                                </div>
                                            </div>

                                            
                                            
                                            
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="farmId">Farm Id</label>
                                                    <select type="text"
                                                        className="form-control"
                                                        id="farmId"
                                                        value={this.state.farmId}
                                                        name="farmId" onChange={this.handleOnChange} required >
                                                            <option value="">Select One</option>
                                                            {farmsList}
                                                            </select>
                                                    
                                                </div>
                                            </div>
<br/>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                <button className="btn btn-primary" type="submit">Save</button> &nbsp;&nbsp;
                                                <button className="btn btn-outline-secondary" onClick='' type="reset">Cancel</button> 
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

export default AddFarmer
