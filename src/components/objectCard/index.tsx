import React from "react";
import { ObjectCardProps } from "./types";

const ObjectCard: React.FC<ObjectCardProps> = ({
  objectTop,
  objectMiddle,
  objectBottom,
  dataTop,
  dataMiddle,
  dataBottom,
  address,
  onClick,
}) => {
  const capitalizeAddress = (address: string) => {
    const words = address.toLowerCase().split(' ');
    
    const capitalizedWords = words.map((word, index) => {
      if (word === 'av.') {
        return 'Av.';
      } else if (index > 0 && words[index - 1] === 'av.') {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else if (word === 'y' && index > 0 && index < words.length - 1) {
        return 'y';
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    });
    
    return capitalizedWords.join(' ');
  };

  const formattedAddress = capitalizeAddress(address);

  return (
    <div className="w-[341px] h-[285px] bg-cardBG card-shadow rounded-[30px] flex justify-center flex-col items-center text-[20px] font-medium overflow-hidden">
      <div className="w-[80%] flex justify-evenly items-center">
        <div className="w-full grid mb-2">
          <span className="uppercase mb-2">{objectTop}</span>
          <span className="uppercase mb-2">{objectMiddle}</span>
          <span className="uppercase mb-2">{objectBottom}</span>
        </div>
        <div className="w-full grid mb-2 text-end">
          <span className="mb-2">{dataTop}</span>
          <span className="mb-2">{dataMiddle}</span>
          <span className="mb-2">{dataBottom}</span>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col justify-center items-center">
          <span className="uppercase mb-2">Encontrado en</span>
          <span>{formattedAddress}</span>
        </div>
        <button
          className="uppercase w-[211px] h-[40px] text-[25px] rounded-[30px] bg-secondary text-backgroundcolor mt-3"
          onClick={onClick}
        >
          Ver más
        </button>
      </div>
    </div>
  );
};

export default ObjectCard;
