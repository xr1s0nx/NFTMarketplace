import React from 'react';
import './App.scss';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="App">
      <div className="container">
          <div className="appWrap">
              <div className="nav">
                  <Navbar/>
              </div>
              <div className="main">
                <Header/>
                <Routes>
                    <Route element={<Main/>} path={'/'}/>
                </Routes>
              </div>
              <div className="profile"></div>
          </div>
      </div>
    </div>
  );
}

export default App;
