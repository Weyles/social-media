import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';

export default function rerenderEntireTree(state) {
    ReactDOM.render(
      <BrowserRouter>
        <App store={store}/>
      </BrowserRouter>,
      document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

