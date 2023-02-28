import React from 'react';
import './App.scss';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./Pages/Main";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import {useSelector} from "react-redux";
import {RootState} from "./Redux/store";
import SignModal from "./Components/SignModal/SignModal";
import { AnimatePresence } from "framer-motion"

function App() {

    const profile = useSelector((state: RootState) => state.MainSlice.profile);
    const profileCardOpen = useSelector((state: RootState) => state.MainSlice.profileCardOpen);
    const modalSignOpen = useSelector((state: RootState) => state.MainSlice.SignModalOpen);

  return (
    <div className="App">
        <AnimatePresence>
            {modalSignOpen ?
                <SignModal/> : null
            }
        </AnimatePresence>

      <div className="container">
          <div className="appWrap">
              <div className="nav">
                  <Navbar/>
              </div>
              <div className="main" style={profileCardOpen ? {maxWidth: '1340px'} : {maxWidth: '1740px'}}>
                <Header/>
                <Routes>
                    <Route element={<Main/>} path={'/'}/>
                </Routes>
              </div>
              <div className="profile">
                  {profile ?
                      profileCardOpen ? <ProfileCard/> : null
                      : null
                  }
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
