import React, { Component } from 'react'
import Footer from '../../partials/Footer'
import NavBar from '../../partials/NavBar'
import Sidebar from '../../partials/Sidebar'
import UserService from '../../service/UserService'
import GMBService from '../../service/GMBService'
import CropService from '../../service/CropService'
import InputService from '../../service/InputService'

export default class AddInput extends Component {
        state = {
            cropId: '',
            quantity: '',
            date: new Date(),
            crops:[],
            message:''
        }
       

        componentDidMount(){
            CropService.fetchCrops().then(res=>{
                this.setState({
                        crops: res.data.result
                })
            })
        }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
       
        let input = this.state;

        InputService.addInput(input).then(res => {
            let message = res.data.message;
            this.setState({
                message
            })
            alert(message);
            this.props.history.push('view_inputs');
        })
    }




    render() {
        const cropsList=this.state.crops.map(crop=>{
            return (
            <option key={crop.id} value={crop.id}>{crop.name}</option>
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
                                    <h2 className="pageheader-title">Input Form </h2>
                                    <p className="pageheader-text">Add Input</p>
                                    <div className="page-breadcrumb">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Home</a></li>
                                                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Input</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Add Input</li>
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
                                    <h5 className="card-header">Add Input</h5>
                                    <div className="card-body">
                                        <form className="needs-validation" onSubmit={this.handleSubmit}>
                                           
                                        <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="districtId">Crop</label>
                                                    <select type="text"
                                                        className="form-control"
                                                        id="cropId"
                                                        value={this.state.cropId}
                                                        name="cropId" onChange={this.handleOnChange} required >
                                                            <option  value="">Select One</option>
                                                            {cropsList}
                                                            </select>
                                                    
                                                </div>
                                            </div>
                                           
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="quantity">Quantity</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="quantity"
                                                        placeholder="Quantity"
                                                        value={this.state.quantity}
                                                        name="quantity" onChange={this.handleOnChange} required />
                                                    
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
