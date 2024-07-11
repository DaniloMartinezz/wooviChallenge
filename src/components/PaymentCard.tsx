import React from 'react';
import Flag from './Flag';

interface PaymentCardProps {
  title: string;
  amount: string;
  total: string;
  selected: boolean;
  onSelect: () => void;
  className?: string;
  showPix?: boolean;
  pixText?: string;
  showFlag?: boolean;
  borderClass?: string;
}

const PaymentCard: React.FC<PaymentCardProps> = ({
  title,
  amount,
  total,
  selected,
  onSelect,
  className,
  showPix = false,
  pixText = "Pix",
  showFlag = false,
  borderClass = "",
}) => {
  return (
    <div
      onClick={onSelect}
      className={`border ${selected ? 'border-green-500' : 'border-gray-300'} ${borderClass} p-4 cursor-pointer ${className} relative`}
    >
      {showPix && (
        <div className="absolute top-0 left-0 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-br-lg">
          {pixText}
        </div>
      )}
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-green-500">{amount}</p>
        </div>
        <div className={`flex items-center ${selected ? 'text-green-500' : 'text-gray-300'}`}>
          <input type="radio" checked={selected} readOnly />
        </div>
      </div>
      <p className="text-gray-700">Total: {total}</p>
      {showFlag && (
        <div className="mt-2">
          <Flag text="R$ 300,00 de volta no seu Pix na hora" />
        </div>
      )}
    </div>
  );
};

export default PaymentCard;
