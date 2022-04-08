import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import News from "./components/news/News"
import Music from "./components/music/Music"
import Settings from "./components/settings/Settings"
import Friends from "./components/friends/Friends";
import UsersContainer from "./components/users/UsersContainer";

function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <div className="app-content">
          <div className="app-navbar">
            <Navbar state={props.store.getState().messagePage}/>
          </div>
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/profile/*" element={<Profile />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/news/*" element={<News />} />
              <Route path="/music/*" element={<Music />} />
              <Route path="/settings/*" element={<Settings />} />
              <Route path="/friends/*" element={<Friends state={props.store.getState().messagePage}/>} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
