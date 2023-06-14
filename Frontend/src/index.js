// This is a React for running app
/* import react from react module */
import React from 'react';

/* import react-dom from react-dom module */
import ReactDOM from 'react-dom';

/* import style for frontend app */
import './index.css';

/* import App  for running app*/
import App from './App';

import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthContextProvider } from './Context/AuthContext';

// This react rendering the app

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
