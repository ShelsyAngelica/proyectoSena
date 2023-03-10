import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react'
import '../src/styles/global.css';
import reportWebVitals from './reportWebVitals';
import { App } from '../src/routes/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain='dev-mr16cx70mxfzery4.us.auth0.com' clientId='KJXM8h8P32OgL7wfjIu4QdcMFrhQs84J' authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <App/>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
