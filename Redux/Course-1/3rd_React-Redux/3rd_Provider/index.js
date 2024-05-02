import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './Store';
// If we will not use Provider from react-redux and If will update the state of redux then React will not re-render the component.
// Because React will re-render only when it's own state will update means it will not re-render when outside of state does changed.
// This issue will resolved by react-redux.
// react-redux will make the redux state as react state. So that if redux state does changed then react will re-render the component.
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();