import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/News"
import Music from "./components/music/Music"
import Settings from "./components/settings/Settings"
import Friends from "./components/friends/Friends";



function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.appState.messagePage}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<Profile state={props.appState.profilePage} />} />
            <Route path="/dialogs/*" element={<Dialogs updateNewMessageText={props.updateNewMessageText} addMessage={props.addMessage} state={props.appState.messagePage} />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="/friends/*" element={<Friends state={props.appState.messagePage}/>} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
