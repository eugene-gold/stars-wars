import React from 'react';
import ReactDOM from 'react-dom/client';
import 'app/styles/index.scss'
import App from './app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
    <React.StrictMode>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
);