import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { CreatorCard, Banner } from '../components';
import images from '../assets';
import { makeId } from '../utils/makeId';

const Home = () => {
  const [hideButtons, setHideButtons] = useState(false);
  const parentRef = useRef(null);
  const scrollRef = useRef(null);

  const RANK = [6, 7, 8, 9, 10];

  const handleScroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  const isScrollable = () => {
    const { current: parent } = parentRef;
    const { current: scroll } = scrollRef;

    if (scroll.scrollWidth >= parent.offsetWidth) {
      setHideButtons(false);
    } else {
      setHideButtons(true);
    }
  };

  useEffect(() => {
    isScrollable();

    window.addEventListener('resize', isScrollable);

    return () => {
      window.removeEventListener('resize', isScrollable);
    };
  });

  return (
    <div className="flex justify-center p-12 sm:px-4">
      <div className="w-full minmd:w-4/5">
        <Banner
          name={(<>Discover, collect, and sell <br /> extraordinary NFTs</>)}
          outterStyles="mb-7 h-72 xs:h-44 sm:h-60 p-12 xs:p-4 rounded-3xl"
          innerStyles="md:text-4xl sm:text-2xl xs:text-xl"
        />

        <div>
          <h1 className="ml-4 xs:ml-0 font-poppins font-semibold text-2xl minlg:text-4xl text-nft-black-1 dark:text-white">
            Best Creators
          </h1>

          <div className="relative flex flex-1 mt-3 max-w-full" ref={parentRef}>
            <div className="flex w-max overflow-x-scroll no-scrollbar select-none" ref={scrollRef}>
              {RANK.map((r, i) => (
                <CreatorCard
                  key={`creator-${i}`}
                  rank={r}
                  creatorImage={images[`creator${i + 1}`]}
                  creatorName={`0x${makeId(3)}...${makeId(4)}`}
                  creatorEths={10 - i * 0.5}
                />
              ))}
              { !hideButtons && (
              <>
                <div className="absolute left-0 top-45 w-8 minlg:w-12 h-8 minlg:h-12 cursor-pointer" onClick={() => handleScroll('left')}>
                  <Image layout="fill" objectFit="contain" alt="left_arrow" src={images.left} className="invert dark:invert-0" />
                </div>
                <div className="absolute right-0 top-45 w-8 minlg:w-12 h-8 minlg:h-12 cursor-pointer" onClick={() => handleScroll('right')}>
                  <Image layout="fill" objectFit="contain" alt="right_arrow" src={images.right} className="invert dark:invert-0" />
                </div>
              </>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
