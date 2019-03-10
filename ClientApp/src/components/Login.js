import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { actionCreators } from '../store/Login';

const Login = props =>(
<div>
    <h1>Login</h1>

    <form>
        <p>Login</p>
        <br></br>
        <input id="username" type="text" placeholder="Username" ></input>
        <br></br>
        <br></br>
        <p>Password</p>
        <br></br>
        <input id="password" type="password" placeholder="Password" ></input>
        <br></br>
        <br></br>
        {/* <button onClick={props.enterLogin}></button> */}
    </form>
</div>

);

export default connect(
   // dispatch => bindActionCreators(enterLogin, dispatch)
    //username => username.value,
    //password => password.value
  )(Login);