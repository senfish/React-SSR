
import React from "react";
import {hydrateRoot} from 'react-dom/client';
import Counter from '../router/counter';

const root = document.getElementById('root');
hydrateRoot(root, <Counter/>)
