import React from 'react';
import { Link } from 'react-router-dom';
import notfoundImg from '../../images/404.jpg'
const NotFound = () => {
    return (
        <div>
    <img src={notfoundImg} alt="" style={{width:'70%',height:'600px'}} /> <br />
    <Link to="/home"><button className="btn btn-danger">Go Home</button></Link>
            
        </div>
    );
};

export default NotFound;