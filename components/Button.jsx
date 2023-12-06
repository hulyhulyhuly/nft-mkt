import React from 'react';

const Button = ({ btnName, clsStyles, handleClick }) => (
  <button
    type="button"
    className={`
    px-6 py-2 minlg:px-8
    text-sm minlg:text-lg
    font-poppins font-semibold
    nft-gradient text-white
    ${clsStyles}
    `}
    onClick={() => handleClick()}
  >
    {btnName}
  </button>
);

export default Button;
