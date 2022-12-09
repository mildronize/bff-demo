import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from '../../components/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App title="App1" />
  </StrictMode>
);
