import React from 'react'
import { motion } from 'framer-motion'
import { Col, Container, Row } from 'reactstrap'

import './service.css'
import serviceData from '../assets/data/serviceData'
const Service = () => {
  return <section>
    <Container>
        <Row>
           {
            serviceData.map((item, index) => (
                <Col lg="3" md="4" key={index}>
                <div className="service_item">
                    <span><i class={item.icon}></i></span>
                    <div>
                        <h3>{item.title}</h3>
                        <p> {item.subtitle} </p>
                    </div>
                </div>
            </Col>
            ))
           }
        </Row>
    </Container>

  </section>
}
export default Service
