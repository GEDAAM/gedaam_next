import PropTypes from 'prop-types';
// import App from 'next/app';
import Head from 'next/head';

import '../assets/styles/index.css';

function GedaamApp({ Component, pageProps }) {
  return (
    <>
      <Head>{/* ADD SEO HERE */}</Head>
      <Component {...pageProps} />
    </>
  );
}

GedaamApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired
};

export default GedaamApp;
