import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';


ReactDOM.render(
  <MuiThemeProvider theme={getMuiTheme(darkBaseTheme)}>
    <App />
  </MuiThemeProvider>, 
  document.getElementById('root')
);

registerServiceWorker();
injectTapEventPlugin();
