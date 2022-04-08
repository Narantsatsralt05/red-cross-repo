import { createTheme} from '@mui/material/styles';
import {ThemeProvider as MuiThemeProvider ,useTheme as muiUseTheme} from '@mui/system'
const Theme = createTheme({
 palette :{ 
     primary:{
         main:"#00fffb"
     },
     secondary: {
        light: '#0066ff',
        main: '#0044ff',
        contrastText: '#ffcc00',
      },
 },
 typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  
})


export const ThemeProvider = ({children}) => {
  return <>
    <MuiThemeProvider theme={Theme}>
    {children}
    </MuiThemeProvider>
    </>
}
export const useTheme = () => {
  return muiUseTheme();
}
export default Theme