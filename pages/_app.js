import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';
import { Navbar, Footer } from '../components';
import { NFTProvider } from '../context/NFTContext';

const MyApp = ({ Component, pageProps }) => (
  <NFTProvider>
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
        <div className="pt-65">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>

      <Script src="https://kit.fontawesome.com/914d922465.js" crossOrigin="anonymous" />
    </ThemeProvider>
  </NFTProvider>
);

export default MyApp;
