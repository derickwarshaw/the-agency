import * as React from 'react';
import { render } from 'react-dom';
import RouterApp from './routes';
import { AppContainer } from 'react-hot-loader';
import './theming/globalCss';

declare var module: {
  hot: {
    accept: (s: string, f: () => void) => void,
  },
};

const rootEl = document.getElementById('app');

render(
  <AppContainer>
    <RouterApp />
  </AppContainer>,
  rootEl,
);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextApp = require('./routes').default;
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl,
    );
  });
}
