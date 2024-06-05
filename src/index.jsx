import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import storeInstance from './components/Store/Store';

import App from './components/App/App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
<Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
