import React from 'react';
import { ThemeProvider, createMuiTheme, colors } from '@material-ui/core';

import { GraphQLProvider } from './components';
import { Shell } from './Shell';

function App() {
  return (
    <GraphQLProvider>
      <ThemeProvider theme={theme}>
        <Shell />
      </ThemeProvider>
    </GraphQLProvider>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.cyan[800],
    },
    secondary: {
      main: colors.cyan[400],
    },
    text: {
      primary: colors.common.black,
      secondary: colors.common.white
    }
  },
});

export default App;
