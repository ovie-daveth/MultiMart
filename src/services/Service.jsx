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
                <motion.div
                whileHover={{scale: 0.95}}
                className="service_item" style={{backgroundColor: `${item.bg}`}}>
                    <span><i class={item.icon}></i></span>
                    <div>
                        <h3>{item.title}</h3>
                        <p> {item.subtitle} </p>
                    </div>
                </motion.div>
            </Col>
            ))
           }
        </Row>
    </Container>

  </section>
}
export default Service
