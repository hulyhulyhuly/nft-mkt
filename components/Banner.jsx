import React from 'react';

const Banner = ({ name, outterStyles, innerStyles }) => (
  <div className={`relative flex items-center w-full overflow-hidden z-0 nft-gradient ${outterStyles}`}>
    <p className={`font-poppins font-bold text-5xl text-white leading-70 ${innerStyles}`}>{name}</p>
    <div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full -top-9 -left-16 -z-5 white-bg" />
    <div className="absolute w-72 h-72 sm:w-56 sm:h-56 rounded-full -bottom-24 -right-14 -z-5 white-bg" />
  </div>
);

export default Banner;
