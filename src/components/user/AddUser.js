import React, { Component } from 'react'
import Footer from '../../partials/Footer'
import NavBar from '../../partials/NavBar'
import Sidebar from '../../partials/Sidebar'
import UserService from '../../service/UserService'

export default class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            access: 'ADMIN',
            name: '',
            surname: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }



    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        let user = this.state;

        UserService.addUser(user).then(res => {
            let message = res.data;
            //alert(message);
            this.setState({
                name: '',
                surname: '',
                email: '',
                password: ''
            })
            this.props.history.push('view_users');
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
                                    <h2 className="pageheader-title">User Form </h2>
                                    <p className="pageheader-text">Add User</p>
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

                                <div className="card">
                                    <h5 className="card-header">Bootstrap Validation Form</h5>
                                    <div className="card-body">
                                        <form className="needs-validation" onSubmit={this.handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="name">First name</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="name"
                                                        placeholder="First name"
                                                        value={this.state.name}
                                                        name="name" onChange={this.handleOnChange} required />
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="surname">Surname</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="surname"
                                                        placeholder="Surname"
                                                        value={this.state.surname}
                                                        name="surname" onChange={this.handleOnChange} required />
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email"
                                                        className="form-control"
                                                        id="email"
                                                        placeholder="Email"
                                                        value={this.state.email}
                                                        name="email" onChange={this.handleOnChange} required />
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                    <label htmlFor="password">Password</label>
                                                    <input type="password"
                                                        className="form-control"
                                                        id="password"
                                                        value={this.state.password}
                                                        placeholder="Password"
                                                        name="password" onChange={this.handleOnChange} required />
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
