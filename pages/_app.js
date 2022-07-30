import '../styles/reset.css'
import '../styles/globals.css'

import ReactGA from 'react-ga';
const TRACKING_ID = "G-8C8432L33P"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
