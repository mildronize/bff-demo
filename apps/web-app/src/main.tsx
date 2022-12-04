import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import ToggleButton from './app/ToggleButton';

ReactDOM.createRoot(document.getElementById('root1') as HTMLElement).render(
  <StrictMode>
    <ToggleButton title="App 1" />
  </StrictMode>
);


ReactDOM.createRoot(document.getElementById('root2') as HTMLElement).render(
  <StrictMode>
    <ToggleButton title="App 2" />
  </StrictMode>
);
