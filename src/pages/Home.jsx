import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'
import Helmet from '../components/Helmet/Helmet'

import heroImage from '../assets/images/hero-img.png'

import '../styles/home.css'
import { Link } from 'react-router-dom'
import Service from '../services/Service'


const Home = () => {

  const year = new Date().getFullYear();

  return <Helmet title={'Home'}>
    <section className="hero__section">
    <Container>
        <Row>
            <Col lg="6" md="6">
                <div className="hero__content">
                  <p className="hero__subtitle">Trending Products in {year}</p>
                  <h2>Make Your Interior More More Minimalist & Modern</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam quae blanditiis autem officia voluptatibus numquam 
                    laudantium corporis. Vero, inventore blanditiis.</p>
                    <Link to='/shop'>
                      <motion.button
                      whileHover={{scale: 0.94}}
                      className="buy_me">SHOP NOW</motion.button>
                    </Link>
                </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImage} alt="hero" />
              </div>
            </Col>
        </Row>
     </Container>

    </section>

    <Service />

    <section className='trending__products'>
        <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className='section__title'>Trending Products</h2>              
              </Col>
            </Row>
        </Container>
    </section>
  </Helmet>
}

export default Home
