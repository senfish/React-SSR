import React from "react";
import {
  hydrateRoot
} from 'react-dom/client';
import App from '../App.js';
import Counter from '../router/counter'
import {
  BrowserRouter
} from 'react-router-dom';

const root = document.getElementById('root');

hydrateRoot(root, 
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
