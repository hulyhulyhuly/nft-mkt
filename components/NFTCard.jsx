import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import images from '../assets';

const NFTCard = ({ nft }) => {
  console.log('NFTCard');

  return (
    <Link href={{ pathname: '/nft-details', query: nft }}>
      <div className="
      flex-1
      p-4 m-4 minlg:m-8 sm:my-2 sm:mx-2
      min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 minlg:min-w-327
      rounded-2xl cursor-pointer shadow-md
      bg-white dark:bg-nft-black-3"
      >
        <div className="relative overflow-hidden w-full h-52 sm:h-36 xs:h-56 minmd:h-60 minlg:h-300 rounded-2xl">
          <Image src={nft.image || images[`nft${nft.i}`]} layout="fill" objectFit="cover" alt="nft01" />
        </div>

        <div className="flex flex-col mt-3">
          <p className="font-poppins font-semibold text-sm minlg:text-xl text-nft-black-1 dark:text-white">{nft.name}</p>

          <div className="flexBetween mt-1 minlg:mt-3 flex-row xs:flex-col xs:items-start xs:mt-3">
            <p className="font-poppins font-semibold text-xs minlg:text-lg text-nft-black-1 dark:text-white">
              {/* {nft.price}<span className="font-normal"> {nftCurrency}</span> */}
              {nft.price}<span className="font-normal"> {nft.i}</span>
            </p>
            <p className="font-poppins font-semibold text-xs minlg:text-lg text-nft-black-1 dark:text-white">
              {/* {shortenAddress(onProfilePage ? nft.owner : nft.seller)} */}
              {`${nft.owner}, ${nft.seller}`}
            </p>
          </div>

          <div className="flexBetween flex-row mt-1 minlg:mt-3" />
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;
