import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';

const defaultTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: purple,
    secondary: deepPurple
  },
});

const terminal = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      paper: '#000'
    }
  },
  typography: {
    fontFamily: [
     'Consolas',
     'monaco',
     'monospace'
    ].join(','),
    align: 'left',
  },
});

export {
  defaultTheme,
  terminal
};