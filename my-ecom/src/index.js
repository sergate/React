import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

initializeApp({  
apiKey: "AIzaSyBDTXbjo9XjnLXaa9N0ijvGMFmCRmH4SyA",
authDomain: "ecommerce-bf053.firebaseapp.com",
projectId: "ecommerce-bf053",
storageBucket: "ecommerce-bf053.appspot.com",
messagingSenderId: "1087399324956",
appId: "1:1087399324956:web:d02fb9736a7df6acbd9ed9",
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
        <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
