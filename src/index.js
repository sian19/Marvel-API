import React from 'react';
import ReactDOM from 'react-dom';

import MarvelAPI from './MarvelAPI';

import { AuthProvider } from './components/context/AuthContext';


ReactDOM.render(
  <AuthProvider>
    <MarvelAPI />
  </AuthProvider>,
  document.getElementById('root')
);


