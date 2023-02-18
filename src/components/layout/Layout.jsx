import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Router from '../../Routers/Router'

const Layout = () => {
  return <>
  <Header />
    <div>
        <Router />
    </div>

    <Footer />
  
  </>
}

export default Layout
