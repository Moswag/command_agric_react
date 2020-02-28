import React, { Component } from 'react'
import AuthService from '../../service/AuthService';
import './Login.css'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
        username: '',
        password: '',
        message: '',
    }
    this.handleSubmithandleSubmit = this.handleSubmit.bind(this);
}

componentDidMount() {
    localStorage.clear();
}

handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {username: this.state.username, password: this.state.password};
    AuthService.login(credentials).then(res => {
        if(res.data.status === 200){
            localStorage.setItem("userInfo", JSON.stringify(res.data.result));
            console.log("Welcom baba")
            this.props.history.push('/view_users');
        }else {
            this.setState({message: res.data.message});
            alert("Wrong credentials, please try again");
        }
    });
};

onChange = (e) =>{
  this.setState({ [e.target.name]: e.target.value });
}
    

    render() {
        return (
  <div  id="myCard">
    <div className="card ">
      <div className="card-header text-center"><a href="#"><img className="logo-img" src="assets/images/logo.png" style={{height:'150px'}} alt="logo" /></a><span className="splash-description">Please enter your user information.</span></div>
      <div className="card-body">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className="form-control form-control-lg" value={this.state.username} onChange={this.onChange} name="username" id="username" type="text" placeholder="Username" autoComplete="off" />
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg" value={this.state.password} onChange={this.onChange} name="password" id="password" type="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <label className="custom-control custom-checkbox">
              <input className="custom-control-input" type="checkbox" /><span className="custom-control-label">Remember Me</span>
            </label>
          </div>
          <button type="submit" className="btn btn-success btn-lg btn-block">Sign in</button>
        </form>
      </div>
      <div className="card-footer bg-white p-0  ">
        <div className="card-footer-item card-footer-item-bordered">
          <a href="#" className="footer-link">Create An Account</a></div>
        <div className="card-footer-item card-footer-item-bordered">
          <a href="#" className="footer-link">Forgot Password</a>
        </div>
      </div>
    </div>
  </div>


        )
    }
}


export default Login;