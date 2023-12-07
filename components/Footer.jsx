import { useTheme } from 'next-themes';
import Image from 'next/image';

import images from '../assets';
import Button from './Button';

const FooterLinks = ({ heading }) => {
  const LINKS_ITEMS = {
    CryptoKet: ['Explore', 'How it Works', 'Contact Us'],
    Supports: ['Help Center', 'Terms of Service', 'Legal', 'Privacy Policy'],
  };

  // const LINKS_CryptoKet = ['Explore', 'How it Works', 'Contact Us']);
  // const LINKS_Supports = Object.freeze(['Help Center', 'Terms of service', 'Legal', 'Privacy policy']);

  return (
    <div className="flex-1 justify-start items-start">
      <h3 className="mb-4 font-poppins font-semibold text-xl text-nft-black-1 dark:text-white">{heading}</h3>
      <ul>
        {LINKS_ITEMS[heading]?.map((link, i) => (
          <li key={`${heading}-${i}`}>
            <p className="cursor-pointer font-poppins font-normal text-base text-nft-dark dark:text-white hover:text-nft-gray-2 dark:hover:text-nft-gray-2">
              {link}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const { theme } = useTheme();

  const SOCIAL_ICONS = Object.freeze([images.instagram, images.twitter, images.telegram, images.discord]);

  return (
    <footer className="flexCenter flex-col py-16 sm:py-8 border-t border-nft-black-1 dark:border-nft-gray-1 mt-10">
      <div className="flex flex-row md:flex-col mt-5 w-full minmd:w-4/5 px-16 sm:px-4">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            <Image src={images.logo02} objectFit="contain" width={32} height={32} alt="logo" />
            <p className="ml-1 font-semibold text-lg text-nft-black-1 dark:text-white">CryptoKet</p>
          </div>
          <p className="mt-6 font-poppins font-semibold text-base text-nft-black-1 dark:text-white">Get the lastest updates.</p>
          <div className="flexBetween w-357 minlg:w-557 md:w-full mt-6 rounded-md border
            bg-white dark:bg-nft-black-2    border-nft-gray-2 dark:border-nft-black-2"
          >
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1
              w-full h-full px-4 rounded-md outline-none
              font-poppins font-normal text-xs minlg:text-lg
              bg-white dark:bg-nft-black-2    text-nft-black-1 dark:text-white"
            />
            <div className="flex-initial">
              <Button btnName="Email me" clsStyles="rounded-md" />
            </div>
          </div>
        </div>

        <div className="flexBetweenStart flex-row flex-1 flex-wrap ml-10 md:ml-10 md:mt-8">
          <FooterLinks heading="CryptoKet" />
          <FooterLinks heading="Supports" />
        </div>
      </div>

      <div className="flexCenter w-full mt-5 py-16 sm:py-4 border-t border-nft-gray-1 dark:border-nft-black-1">
        <div className="flexBetween flex-row sm:flex-col items-center mt-7 minmd:w-4/5">
          <p className="font-poppins font-semibold text-base text-nft-black-1 dark:text-white">CryptoKet, Inc. All Rights Reserved.</p>
          <div className="flex flex-row sm:mt-4">
            {SOCIAL_ICONS.map((icon, i) => (
              <div key={`{icon-${i}}`} className="mx-2 cursor-pointer">
                <Image width={24} height={24} objectFit="contain" alt="social" src={icon} className={theme === 'light' && 'filter invert'} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
