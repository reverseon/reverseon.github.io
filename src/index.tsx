import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css'
import './index.scss';
import App from './App';
import {BrowserRouter, useLocation} from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
      <BrowserRouter>
          <ScrollToTop />
          <App uri={window.location.pathname} />
      </BrowserRouter>
  </React.StrictMode>
);
