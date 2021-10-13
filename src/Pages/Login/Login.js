import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {googleSignIn}=useAuth()
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={googleSignIn} className="btn btn-success">Google SignIn</button>
        </div>
    );
};

export default Login;