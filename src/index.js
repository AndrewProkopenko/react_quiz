import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={'/react_quiz'}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

