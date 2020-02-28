import React, { Component } from 'react'
import Footer from '../../partials/Footer'
import NavBar from '../../partials/NavBar'
import Sidebar from '../../partials/Sidebar'
import UserService from '../../service/UserService'
import GMBService from '../../service/GMBService'
import CropService from '../../service/CropService'

export default class AddPrice extends Component {
        state = {
            cropId: '2',
            price: '',
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
       
        let price = this.state;

        GMBService.addPrice(price).then(res => {
            let message = res.data.message;
            //alert(message);
            this.setState({
                message
            })
            alert(message);
            this.props.history.push('view_prices');
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
                                    <h2 className="pageheader-title">GMB Price Form </h2>
                                    <p className="pageheader-text">Add Price</p>
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
                                    <h5 className="card-header">Bootstrap Validation Form</h5>
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
                                                    <label htmlFor="price">Price Per KG</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="price"
                                                        placeholder="Price"
                                                        value={this.state.price}
                                                        name="price" onChange={this.handleOnChange} required />
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </div>

                                               

                                                


                                            </div>

                                            <div className="form-row">




                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <button className="btn btn-primary" type="submit">Submit form</button>
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
