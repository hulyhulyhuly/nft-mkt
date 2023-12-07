import React from 'react';
import Image from 'next/image';

import images from '../assets';

const CreatorCard = ({ rank, creatorImage, creatorName, creatorEths }) => {
  console.log('CreatorCard');

  return (
    <div className="flex flex-col p-4 m-4 min-w-190 minlg:min-w-240 rounded-3xl bg-white border dark:bg-nft-black-3 border-nft-gray-1 dark:border-nft-black-3">
      <div className="flexCenter w-8 h-8 minlg:w-10 minlg:h-10 rounded-full bg-nft-red-violet">
        <p className="font-poppins font-semibold text-base minlg:text-lg text-white">{rank}</p>
      </div>

      <div className="flex justify-center my-2">
        <div className="relative w-20 h-20 minlg:w-28 minlg:h-28">
          <Image layout="fill" objectFit="cover" alt="creator" src={creatorImage} className="rounded-full" />
          <div className="absolute bottom-2 -right-0 w-4 h-4 minlg:w-7 minlg:h-7">
            <Image layout="fill" objectFit="contain" alt="tick" src={images.tick} />
          </div>
        </div>
      </div>

      <div className="mt-3 minlg:mt-7 text-center flexCenter flex-col">
        <p className="font-poppins font-semibold text-base text-nft-black-1 dark:text-white">{creatorName}</p>
        <p className="mt-1 font-poppins font-semibold text-base text-nft-black-1 dark:text-white">
          { creatorEths.toFixed(2) } <span className="font-normal">ETH</span>
        </p>
      </div>
    </div>
  );
};

export default CreatorCard;
