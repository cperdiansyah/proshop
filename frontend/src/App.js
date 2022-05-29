import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import { Container } from 'react-bootstrap';

import HomeScreens from './screens/HomeScreens';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScren';
import PlaceOrder from './screens/PlaceOrder';
import OrderScreen from './screens/OrderScreen';

function App() {
  return (
    <>
      <Header />
      <main className='py-4'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreens />} />
            <Route path='/order/:id' element={<OrderScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/placeorder' element={<PlaceOrder />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
