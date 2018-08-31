import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#EFF1F3',
      main: '#484A48',
      dark: '#484A48',
      contrastText: '#fff',
      1: '#424242',
      2: '#D84315',
      3: '#E0F7FA',
      contrastDefaultColor: 'light',
    },
    secondary: {
      light: '#ff7961',
      main: '#D84315',
      dark: '#ba000d',
      contrastText: '#000',
      1: '#e91e63',
      2: '#f8bbd0',
      3: '#880e4f',
    },
  },
});
