import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import {Provider} from 'react-redux';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot (document.getElementById ('root'));
root.render (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          icon={false}
          toastOptions={{
            // Define default options
            duration: 3000,
            // Default options for specific types
            success: {
              duration: 3000,
              style: {
                background: "#004225", // Customize the background color for success toasts
                color: "#fff", // Customize the text color for success toasts
              },
            },
            error: {
              duration: 3000,
              style: {
                background: "#791e06", // Customize the background color for success toasts
                color: "#fff", // Customize the text color for success toasts
              },
            },
          }}
        />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals ();
