import {color} from './color';
import {font} from './font';
import React, { createContext, useContext } from 'react';

export const theme = {
  color,
  font,
  // color:{
  //   primary: {
  //     blue: '##0066B3',
  //     red: '#ED1D24',
  //     white: '#FFFFFF',
  //     black: '#000000',
  //     blue: '#0066B3',
  //   },
  //   secondary: {
  //     green: '#1A9461',
  //     orange: '#DD5D00',
  //     red: '#ED1D24',
  //     white: '#D1D1D1',
  //     black: '#424242',
  //     blue: '#0085FF',
  //   },
  //   disabled: {
  //     black: '#A9A9A9',
  //     white: '#e2e2e2',
  //     blue: '#0066B3CC',
  //   },
  // },
  // typography: {
  //   fontFamily: {
  //     mainFont: 'Roboto',
  //   },
  //   weight: {  
  //     heavy: '700',
  //     light: '400',
  //     headlineheavy: '700',
  //     displaylight: '400',
  //   },
  //   color: {
  //     PrimeWhite: '#FFFFFF',
  //     SecondaryWhite: '#D1D1D1',
  //     DisabledWhite: '#e2e2e2',
  //     PrimaryBlack: '#000000',
  //     SecondaryBlack: '#424242',
  //     DisabledBlack: '#A9A9A9',
  //     PrimaryBlue: '#0066B3',
  //     SecondaryBlue: '#0085FF',
  //     DisabledBlue: '#0066B3CC',
  //   },
  // },
};

export const ThemeContext = createContext(theme);
export const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

// import { createTheme} from '@mui/material/styles';
// import {ThemeProvider as MuiThemeProvider ,useTheme as muiUseTheme} from '@mui/system'
// const Theme = createTheme({
//  palette :{
//      primary:{
//          main:"#00fffb"
//      },
//      secondary: {
//         light: '#0066ff',
//         main: '#0044ff',
//         contrastText: '#ffcc00',
//       },
//  },
//  typography: {
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//   },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },

// })

// export const ThemeProvider = ({children}) => {
//   return <>
//     <MuiThemeProvider theme={Theme}>
//     {children}
//     </MuiThemeProvider>
//     </>
// }
// export const useTheme = () => {
//   return muiUseTheme();
// }
// export default Theme
