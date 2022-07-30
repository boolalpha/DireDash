import '../styles/reset.css'
import '../styles/globals.css'

// import ReactGA from 'react-ga';
// const TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS; // OUR_TRACKING_ID
// ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
