import '../../styles/globals.css';
// import Test from '../test';
import { ThemeProvider } from '../theme/theme';
import { AuthProvider } from '../providers/authContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
