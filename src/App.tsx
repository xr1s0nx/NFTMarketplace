import React from 'react';
import './App.scss';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./Pages/Main";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./Redux/store";
import SignModal from "./Components/SignModal/SignModal";
import { AnimatePresence } from "framer-motion"
import {onAuthStateChanged} from 'firebase/auth';
import {auth, db} from "./firebase";
import {doc} from "firebase/firestore";
import {setAuth, setUser} from "./Redux/Slices/MainSlice";
import LogoutModal from "./Components/LogoutModal/LogoutModal";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import {motion} from "framer-motion";
import {onSnapshot} from 'firebase/firestore';
import ChangeAvatarModal from "./Components/ChangeAvatarModal/ChangeAvatarModal";

function App() {

    const modalSignOpen = useSelector((state: RootState) => state.MainSlice.SignModalOpen);
    const {logoutModalStatus, profile, profileCardOpen, AvatarModalStatus} = useSelector((state: RootState) => state.MainSlice);
    const dispatch = useDispatch();

    const [isLoading, setLoading]: [isLoading: boolean, setLoading: Function] = React.useState(true);

    React.useEffect(() => {
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser !== null && !Object.keys(profile).length) {
            setLoading(true);
            onSnapshot(doc(db, 'Users', currentUser.uid), (doc) => {
                const userdata = doc.data();
                if(userdata) {
                    dispatch(setUser(userdata));
                    dispatch(setAuth(true));
                }
                setLoading(false)
            })
        } else if(isLoading) {
            setLoading(false)
        }
    })

  return (
      <AnimatePresence>
          {
              isLoading  ?  <LoadingScreen/> :
                  <motion.div
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      transition={{duration: 0.15}}
                      exit={{opacity: 0}}
                  className="App">
                  <AnimatePresence>
                      {modalSignOpen ? <SignModal/> : null}
                      {logoutModalStatus ? <LogoutModal/> : null}
                      {AvatarModalStatus ? <ChangeAvatarModal/> : null}
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
                          <AnimatePresence>
                              {profile && profileCardOpen?
                                  <motion.div
                                      initial={{opacity: 0}}
                                      animate={{opacity: 1}}
                                      transition={{duration: 0.3, delay: 0.2}}
                                      className="profile">
                                      <ProfileCard/>
                                  </motion.div>
                                  : null
                              }
                          </AnimatePresence>
                      </div>
                  </div>
              </motion.div>
          }
      </AnimatePresence>
  );
}

export default App;
