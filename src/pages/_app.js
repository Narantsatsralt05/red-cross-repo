<<<<<<< HEAD
import '../../styles/globals.css';
// import Test from '../test';
=======
/* eslint-disable */
import '../../styles/globals.css'
>>>>>>> 011b8a4 ([web] ESlint (#49))
import { ThemeProvider } from '../theme/theme';
import { AuthProvider } from '../providers/authContext';

function MyApp({ Component, pageProps }) {
<<<<<<< HEAD
  return (
    <AuthProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}
<<<<<<< HEAD

export default MyApp;
=======
  return <ThemeProvider ><Component {...pageProps} /></ThemeProvider>
}
export default MyApp
>>>>>>> 011b8a4 ([web] ESlint (#49))
=======
export default MyApp
>>>>>>> dc86f28 (designed folder structure)
