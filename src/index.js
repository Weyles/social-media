import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/State';

export default function rerenderEntireTree(state) {
    ReactDOM.render(
      <BrowserRouter>
        <App updateNewMessageText={store.updateNewMessageText.bind(store)} appState={store.getState()} addMessage={store.addMessage.bind(store)}/>
      </BrowserRouter>,
      document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

