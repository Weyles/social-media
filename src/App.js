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



function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<Profile postData={props.postData} />} />
            <Route path="/dialogs/*" element={<Dialogs userData={props.userData} messageData={props.messageData} />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
