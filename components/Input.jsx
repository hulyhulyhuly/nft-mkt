// import { useContext } from 'react';

// import { NFTContext } from '../context/NFTContext';

const Input = ({ inputType, title, placeholder, handleClick }) => {
//   const { nftCurrency } = useContext(NFTContext);
  const nftCurrency = 0;

  const generateInputElement = () => {
    const basicStyles = `
      mt-4 px-4 py-3 w-full rounded-lg outline-none
      font-poppins text-base text-nft-gray-2 dark:text-white
      border border-nft-gray-2 dark:border-nft-black-1
      bg-white dark:bg-nft-black-1
    `;

    switch (inputType) {
      case 'textarea':
        return <textarea rows={10} placeholder={placeholder} onChange={handleClick} className={`${basicStyles}`} />;
      case 'number':
        return (
          <div className={`flexBetween flex-row ${basicStyles}`}>
            <input type="number" placeholder={placeholder} onChange={handleClick} className="flex-1 w-full outline-none bg-white dark:bg-nft-black-1" />
            <p className="font-poppins font-semibold text-xl text-nft-black-1 dark:text-white">{nftCurrency}</p>
          </div>
        );
      default:
        return <input placeholder={placeholder} onChange={handleClick} className={`${basicStyles}`} />;
    }
  };

  return (
    <div className="mt-10 w-full">
      <p className="font-poppins font-semibold text-xl text-nft-black-1 dark:text-white">{title}</p>
      {generateInputElement()}
    </div>
  );
};

export default Input;
