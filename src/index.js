import React from 'react';
import { hydrate } from 'react-dom';
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureStore from 'store';
// import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const AppBundle = (
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ReduxProvider>
);

window.onload = () => {
    Loadable.preloadReady().then(() => {
        hydrate(
            AppBundle,
            document.getElementById('root')
        );
    });
};

// registerServiceWorker();
