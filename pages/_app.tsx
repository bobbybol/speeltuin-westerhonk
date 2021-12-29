import type { AppProps } from 'next/app';
import '../styles/globals.scss';

import SiteHeader from '../components/SiteShell/SiteHeader';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SiteHeader />
      <div className="staticBackground"></div>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
