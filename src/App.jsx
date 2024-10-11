import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; 
import OrderForm from './components/OrderForm'; 
import OrderConfirmation from './components/OrderConfirmation'; 
import Anasayfa from './components/Anasayfa';
import SiparisPizza from './components/SiparisPizza';
import SiparisOnay from './components/SiparisOnay';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order-form" element={<OrderForm />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                <Route path="/anasayfa" element={<Anasayfa />} />
                <Route path="/siparis-pizza" element={<SiparisPizza />} />
                <Route path="/siparis-onayi" element={<SiparisOnay />} />
            </Routes>
        </Router>
    );
};

export default App;