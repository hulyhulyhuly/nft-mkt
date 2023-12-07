import { Banner } from '../components';

const Home = () => {
  console.log('Home');

  return (
    <div className="flex justify-center p-12 sm:px-4">
      <div className="w-full minmd:w-4/5">
        <Banner
          name={(<>Discover, collect, and sell <br /> extraordinary NFTs</>)}
          outterStyles="mb-7 h-72 xs:h-44 sm:h-60 p-12 xs:p-4 rounded-3xl"
          innerStyles="md:text-4xl sm:text-2xl xs:text-xl"
        />
      </div>
      {/* <p>adasd</p>
      <p>adasd</p>
      <p>adasd</p>
      <p>adasd</p>
      <p>adasd</p> */}
    </div>
  );
};

export default Home;
