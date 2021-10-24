import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount){
                    alert('delete successfully')
                    const remaining=services.filter(service=>service._id !==id)
                    setServices(remaining)
                }
                
            })
    }
    return (
        <div>
            <h2>Manage services</h2>
            <Row md={3} className="w-75 mx-auto mt-5">
                {
                    services.map(service => <Col key={service._id}>
                        <h3>{service.name}</h3>
                        <button onClick={() =>handleDelete(service._id)}>X</button>
                    </Col>)
                }

            </Row>
        </div>
    );
};

export default ManageServices;