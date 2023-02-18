import React from 'react'
import './header.css'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

import { Container, Row } from 'reactstrap'

const Header = () => {

  const nav_link = [
    {
      path: 'home',
      display: 'Home'
    },
    {
      path: 'shop',
      display: 'Shop'
    },
    {
      path: 'cart',
      display: 'Cart'
    },
  ]

  return <header className='header'>
    <Container>
      <Row>
        <div className="nav_wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            <div>
              <h1>Multimart</h1>
              <p>Since 2019</p>
            </div>
          </div>
          <motion.div 
          initial={{opacity: 0, x: 0}}
          animate={{opacity: 1, x: 100}}
          exit={{opacity: 0, x: 0}}
          transition={{ ease: "easeOut", duration: .6 }}
          className="navigation">
            <ul className="menu">
              {
                nav_link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} 
                    className={(navItem) => navItem.isActive ? 'nav_active' : ''}
                    >{item.display}</NavLink>
                  </li>
             
                ))
              }
            </ul>
          </motion.div>
          <div className="nav__icons">
            <span className="fav_icon">
              <i class="ri-heart-line"></i>
              <span className="badge">1</span>
            </span>
            <span className="cart__icon">
              <i class="ri-shopping-bag-line">
                <span className="badge">1</span>
            </i></span>
            <span>
              <motion.img whileTap={{scale: 1.2}}
               src={userIcon} alt="user" />
            </span>
          </div>
          <div className="mobile_view_menu">
            <span><i class="ri-menu-line"></i></span>
          </div>
        </div>
      </Row>
    </Container>
  </header>
}

export default Header
