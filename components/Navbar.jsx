import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import images from '../assets';
import { Button } from '.';

const MenuItems = ({ isMobile, active, setActive }) => {
  const ITEMS = Object.freeze(['Explore NFTs', 'Listed NFTs', 'My NFTs']);
  const flexDirection = isMobile ? 'flex-col h-full' : 'flex-row';
  const textColor = (item) => (active === item ? 'text-nft-black-1 dark:text-white' : 'text-nft-gray-1 dark:text-nft-gray-2');

  const generateLink = (i) => {
    switch (i) {
      // case 0: return '/explore-nfts';
      // case 1: return '/listed-nfts';
      // case 2: return '/my-nfts';
      case 0: return '/';
      case 1: return '/';
      case 2: return '/';
      default: return '/';
    }
  };

  return (
    <ul className={`flexCenter ${flexDirection} list-none`}>
      {ITEMS.map((item, i) => (
        <li
          key={i}
          className={`p-1 mx-3 font-poppins font-semibold text-base ${textColor(item)} hover:text-nft-dark dark:hover:text-white`}
          onClick={() => setActive(item)}
        >
          <Link href={`${generateLink(i)}`}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

const ButtonGroup = ({ hasConnect, router, setActive }) => {
  const btnName = hasConnect ? 'Create' : 'Connect';
  const pathName = hasConnect ? '/create-nft' : '/connect';

  const handleClick = () => {
    setActive('');
    router.push(pathName);
  };

  return (
    <Button
      btnName={btnName}
      clsStyles="mx-2 rounded-xl"
      handleClick={handleClick}
    />
  );
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState(false);
  const [hasConnect, setHasConnect] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="
      flexBetween flex-row
      w-full fixed z-10 p-4 border-b
      bg-white dark:bg-nft-dark
      border-nft-gray-1 dark:border-nft-black-1"
    >
      <div className="flex flex-1 flex-row justify-start" onClick={() => {}}>
        <Link href="/">
          <div className="flexCenter cursor-pointer md:hidden">
            <Image src={images.logo02} objectFit="contain" width={32} height={32} alt="logo" />
            <p className="ml-1 font-semibold text-lg text-nft-black-1 dark:text-white">CryptoKet</p>
          </div>
        </Link>
        <Link href="/">
          <div className="hidden cursor-pointer md:flex" onClick={() => {}}>
            <Image src={images.logo02} objectFit="contain" width={32} height={32} alt="logo" />
          </div>
        </Link>
      </div>

      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mr-2">
          <input type="checkbox" className="checkbox" id="checkbox" onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
          <label htmlFor="checkbox" className="relative flexBetween w-8 h-4 p-1 bg-black rounded-2xl label">
            <p className="fas fa-sun" />
            <p className="fas fa-moon" />
            <div className="absolute w-3 h-3 bg-white  rounded-full ball" />
          </label>
        </div>
        <div className="flex md:hidden">
          <MenuItems active={active} setActive={setActive} />
          <div className="ml-4">
            <ButtonGroup hasConnect={hasConnect} router={router} setActive={setActive} />
          </div>
        </div>
      </div>

      <div className="hidden ml-2 md:flex">
        <Image
          objectFit="contain"
          width={24}
          height={24}
          alt={isOpen ? 'open' : 'close'}
          src={isOpen ? images.cross : images.menu}
          className="invert dark:invert-0"
          onClick={() => setIsOpen((prev) => !prev)}
        />
        {isOpen && (
          <div className="fixed inset-0 top-65 flex justify-between flex-col nav-h z-10 bg-white dark:bg-nft-dark">
            <div className="flex-1 p-4">
              <MenuItems active={active} setActive={setActive} isMobile />
            </div>
            <div className="p-4 border-t border-nft-gray-1 dark:border-nft-black-1">
              <ButtonGroup hasConnect={hasConnect} router={router} setActive={setActive} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
