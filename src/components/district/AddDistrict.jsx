import React, { Component } from 'react'
import CropService from '../../service/CropService';
import Footer from '../../partials/Footer';
import NavBar from '../../partials/NavBar';
import Sidebar from '../../partials/Sidebar';
import SoilService from '../../service/SoilService';
import DistrictService from '../../service/DistrictService';

class AddDistrict extends Component {
    state = {
        name: '',
        soilType:'2',
        soil:[],
        message: null
    }

    componentDidMount(){
        SoilService.fetchSoilTypes().then(res=>{
            const soil=res.data.result;
            this.setState({
                soil
            })
        })
     
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let district = this.state;
        DistrictService.addDistrict(district).then(res => {
            this.setState({
                message: res.data.message
            })

            alert(this.state.message);
            if (res.data.status === 200) {
                this.props.history.push('view_districts');
            }
        })


    }


    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const soilTypeList=this.state.soil.map(s=>{
            return (
            <option key={s.id} value={s.id}>{s.name}</option>
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
                                    <h2 className="pageheader-title">District Form </h2>
                                    <p className="pageheader-text">Add District</p>
                                    <div className="page-breadcrumb">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Home</a></li>
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">User</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Add User</li>
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
                                    <h5 className="card-header">Add District</h5>
                                    <div className="card-body">
                                        <form className="needs-validation" onSubmit={this.handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="name">District name</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="name"
                                                        placeholder="District name"
                                                        value={this.state.name}
                                                        name="name" onChange={this.handleOnChange} required />
                                                    
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="name">Soil Type</label>
                                                    <select type="text"
                                                        className="form-control"
                                                        id="soilType"
                                                        value={this.state.soilType}
                                                        name="soilType" onSelect={this.handleOnChange} required >
                                                            {soilTypeList}
                                                            </select>
                                                    
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

export default AddDistrict
