import '../../styles/globals.css';
import { ThemeProvider } from '../theme/theme';
import { AuthProvider } from '../common/context/AuthContext';
import { LoaderProvider } from '../common/context/LoaderContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <LoaderProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </LoaderProvider>
    </AuthProvider>
  );
}

export default MyApp;

