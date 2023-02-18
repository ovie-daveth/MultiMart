import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Shop from '../pages/Shop'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Checkout from '../pages/Checkout'


const Router = () => {
  return (
  <Routes>
    <Route path="/" element={<Navigate to="home" />} />
    <Route path="home" element={<Home />}  />
    <Route path="cart" element={<Cart />}  />
    <Route path="shop" element={<Shop />}  />
    <Route path="shop/:id" element={<ProductDetails />}  />
    <Route path="login" element={<Login />}  />
    <Route path="signup" element={<SignUp />}  />
    <Route path="checkout" element={<Checkout />}  />
  </Routes>
  )
}

export default Router
