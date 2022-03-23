import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import DialogsComponents from "./components/dialogs/DialogsComponents";
import News from "./components/news/News"
import Music from "./components/music/Music"
import Settings from "./components/settings/Settings"
import Friends from "./components/friends/Friends";



function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.store.getState().messagePage}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<Profile store={props.store} />} />
            <Route path="/dialogs/*" element={<DialogsComponents store={props.store} />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="/friends/*" element={<Friends state={props.store.getState().messagePage}/>} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
