import '@carvana/showroom-css-theme/Theme.css';
import '@carvana/showroom-css-theme/Reset.css';
import '@carvana/showroom-css-theme/Font.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
