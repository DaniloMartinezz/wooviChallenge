// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PaymentMethodPage from './pages/PaymentMethodPage';
import QRCodePaymentPage from './pages/QRCodePaymentPage';
import CreditCardPaymentPage from './pages/CreditCardPaymentPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PaymentMethodPage />} />
      <Route path="/qr-code-payment" element={<QRCodePaymentPage />} />
      <Route path="/credit-card-payment" element={<CreditCardPaymentPage />} />
    </Routes>
  );
}

export default App;
