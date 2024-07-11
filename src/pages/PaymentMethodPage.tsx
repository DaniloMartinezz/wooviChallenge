import React, { useState, useEffect } from 'react';
import PaymentCard from '../components/PaymentCard';
import { useNavigate } from 'react-router-dom';
import LogoWoovi from '../assets/LogoWoovi.png';

const PaymentMethod: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [paymentOptions, setPaymentOptions] = useState<any[]>([]);
  const navigate = useNavigate();

  const initialAmount = 3050000; // Valor inicial do primeiro card

  useEffect(() => {
    // Função para calcular os valores das parcelas com juros
    const calculateInstallments = (amount: number) => {
      const options = [
        { title: `1x R$ ${(amount / 100).toFixed(2)}`, amount: 'Ganhe 3% de Cashback', total: amount },
        { title: `2x R$ ${(amount * 1.02 / 2 / 100).toFixed(2)}`, amount: `Total: R$ ${((amount * 1.02) / 100).toFixed(2)}`, total: amount * 1.02 },
        { title: `3x R$ ${(amount * 1.03 / 3 / 100).toFixed(2)}`, amount: `Total: R$ ${((amount * 1.03) / 100).toFixed(2)}`, total: amount * 1.03 },
        { title: `4x R$ ${(amount * 1.04 / 4 / 100).toFixed(2)}`, amount: `Total: R$ ${((amount * 1.04) / 100).toFixed(2)}`, total: amount * 1.04 },
        { title: `5x R$ ${(amount * 1.05 / 5 / 100).toFixed(2)}`, amount: `Total: R$ ${((amount * 1.05) / 100).toFixed(2)}`, total: amount * 1.05 },
        { title: `6x R$ ${(amount * 1.06 / 6 / 100).toFixed(2)}`, amount: `Total: R$ ${((amount * 1.06) / 100).toFixed(2)}`, total: amount * 1.06 },
        { title: `7x R$ ${(amount * 1.07 / 7 / 100).toFixed(2)}`, amount: `Total: R$ ${((amount * 1.07) / 100).toFixed(2)}`, total: amount * 1.07 },
      ];
      return options;
    };

    setPaymentOptions(calculateInstallments(initialAmount));
  }, []);

  const handleSelect = (index: number) => {
    setSelectedOption(index);
  };

  const handleConfirm = () => {
    if (selectedOption !== null) {
      const selectedPayment = paymentOptions[selectedOption];
      navigate('/qr-code-payment', { state: { payment: selectedPayment } });
    }
  };

  return (
    <div className="p-4">
        <div className="flex flex-col justify-center items-center">
        <img src={LogoWoovi} alt="Logo Woovi" className="mb-4" />
        <h1 className="text-xl font-bold mb-4 text-text">João, como você quer pagar?</h1>
        </div>

      {paymentOptions.map((option, index) => (
        <PaymentCard
          key={index}
          title={option.title}
          amount={option.amount}
          total={`R$ ${(option.total / 100).toFixed(2)}`}
          selected={selectedOption === index}
          onSelect={() => handleSelect(index)}
          className={index === 0 ? 'mb-4' : 'mb-0'}
          borderClass={
            index === 0
              ? 'border rounded-lg'
              : index === 1
              ? 'border-t rounded-lg'
              : index === paymentOptions.length - 1
              ? 'border-b rounded-lg'
              : 'border-t border-b'
          }
          showPix={index === 0 || index === 1}
          pixText={index === 1 ? "Pix Parcelado" : "Pix"}
          showFlag={index === 0 || index === 3}
        />
      ))}
      <button
        onClick={handleConfirm}
        className=" bg-text-green text-white px-4 py-2 rounded mt-4 w-full"
      >
        Confirmar
      </button>
    </div>
  );
};

export default PaymentMethod;
