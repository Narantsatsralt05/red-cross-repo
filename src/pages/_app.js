import '../../styles/globals.css'
import Test from '../test';
import { ThemeProvider } from '../components/theme';

function MyApp({ Component, pageProps }) {
  return <><ThemeProvider ><Component {...pageProps} /></ThemeProvider></>
}

export default MyApp
