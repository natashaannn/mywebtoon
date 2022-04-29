import { createTheme } from '@mui/material/styles';

const main = createTheme({
    typography: {
        fontFamily: [
            'Varela Round',
            'sans serif'
        ].join(','),
        h1: {
            color: 'primary'
        }
      },
      palette: {
          primary: {
            main: '#6CB9B3',
          },
          secondary: {
            main: '#EDC8C0'
          },
          background: {
              default: '#9DDBD0',
          }
      }
  });

  export default main;