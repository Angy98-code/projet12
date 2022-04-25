import React from 'react';
import ReactDOM from "react-dom/client";// new version
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';

//new version
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

