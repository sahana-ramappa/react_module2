import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';

import Router_app from './Router_app';
import { FavouritesContextProvider } from './store/Favourites-contxt';

ReactDOM.render(
    <FavouritesContextProvider>
        <BrowserRouter>
            <Router_app />
        </BrowserRouter>
    </FavouritesContextProvider>,
    document.getElementById('root')
);
