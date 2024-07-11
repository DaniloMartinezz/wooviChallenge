// src/pages/QRCodePaymentPage.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import QRCode from 'qrcode.react';

const QRCodePaymentPage: React.FC = () => {
  const location = useLocation();
  const payment = location.state?.payment;

  if (!payment) {
    return <div>Erro: Nenhuma opção de pagamento selecionada.</div>;
  }

  return (
    <div>
      <h1>Pague a entrada de {payment.total} pelo Pix</h1>
      <QRCode value={`Pagamento: ${payment.total}`} size={200} />
      {/* Use os valores reais do QR code aqui */}
    </div>
  );
}

export default QRCodePaymentPage;
