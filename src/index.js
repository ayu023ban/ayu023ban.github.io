import React from 'react';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker.js';
import 'scroll-behavior-polyfill';
import { createRoot } from 'react-dom/client';


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
