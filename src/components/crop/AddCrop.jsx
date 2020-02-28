import React, { Component } from 'react'
import CropService from '../../service/CropService';
import Footer from '../../partials/Footer';
import NavBar from '../../partials/NavBar';
import Sidebar from '../../partials/Sidebar';
import SoilService from '../../service/SoilService';

class AddCrop extends Component {
    state = {
        name: '',
        soilType:'',
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
        let crop = this.state;
        CropService.addCrop(crop).then(res => {
            this.setState({
                message: res.data.message
            })

            alert(this.state.message);
            if (res.data.status === 200) {
                this.props.history.push('view_crops');
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
                            <div className="col-md-12">
                                <div className="page-header">
                                    <h2 className="pageheader-title">Crop Form </h2>
                                    <p className="pageheader-text">Add Crop</p>
                                    <div className="page-breadcrumb">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Home</a></li>
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Crop</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Add Crop</li>
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

                            <div className="col-md-12">

                                <div className="card" style={{width: 1000}}>
                                    <h5 className="card-header">Add Crop</h5>
                                    <div className="card-body">
                                        <form className="needs-validation" onSubmit={this.handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="name">Crop name</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="name"
                                                        placeholder="Crop name"
                                                        value={this.state.name}
                                                        name="name" onChange={this.handleOnChange} required />
                                                    
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="name">Soil Type</label>
                                                    <select 
                                                        className="form-control"
                                                        id="soilType"
                                                        value={this.state.soilType}
                                                        name="soilType" onChange={this.handleOnChange} required >
                                                            <option value="">Select One</option>
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

export default AddCrop
