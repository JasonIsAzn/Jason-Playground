import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import ContextWrapper from './context/ContextWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode >
  </ContextWrapper >
);
