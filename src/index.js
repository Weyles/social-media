import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

export const userData = [
  {
    id: 1,
    name: "Dima",
  },
  {
    id: 2,
    name: "Vanya",
  },
  {
    id: 3,
    name: "Sasha",
  },
  {
    id: 4,
    name: "Victoria",
  },
  {
    id: 5,
    name: "Danya",
  },
  {
    id: 6,
    name: "Nikita",
  },
];

export const messageData = [
  {
    id: 1,
    message: "Wow, wow wow!!!"
  },
  {
    id: 2,
    message: "It's cool"
  },
  {
    id: 3,
    message: "Owsome!"
  },
  {
    id: 4,
    message: "Hi Vanya"
  },
  {
    id: 5,
    message: "Hola guys"
  },
  {
    id: 6,
    message: "Imposible!"
  },
];

export const postData = [
  {
    id: 1,
    text: "How are you?",
    likesCount: 3,
  },
  {
    id: 2,
    text: "It's my beer",
    likesCount: 68,
  },
  {
    id: 3,
    text: "Hey, loooooook",
    likesCount: 26,
  },
  {
    id: 4,
    text: "New text",
    likesCount: 7,
  },
  {
    id: 5,
    text: "...",
    likesCount: 2,
  },
  {
    id: 6,
    text: "Imposible!",
    likesCount: 30,
  },
];

ReactDOM.render(
  <BrowserRouter>
    <App postData={postData} messageData={messageData} userData={userData} />
  </BrowserRouter>,
  document.getElementById('root')
);
