import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BlogPage from './Blog';
import RouterDom from './Router/Route';
import ArtistPage from './Artist';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <RouterDom/>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
