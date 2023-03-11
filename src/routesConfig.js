import React  from 'react';
import Home from './router/home';
import Counter from './router/counter';

export default [
  {
    path: '/',
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  }
]