import React from 'react';
import styles from './LogoutModal.module.scss';
import {changeLogoutModalStatus, setAuth} from "../../Redux/Slices/MainSlice";
import {useDispatch} from "react-redux";
import {signOut} from 'firebase/auth';
import {auth} from "../../firebase";
import {motion} from "framer-motion";

function LogoutModal() {

    const dispatch = useDispatch();


    const closeModal = (e: any) => {
        if(e.target === e.currentTarget) {
            dispatch(changeLogoutModalStatus(false));
        }
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.15}}
            exit={{opacity: 0}}
            className={styles.logout} onClick={(e) => closeModal(e)}>
            <div className={styles.content}>
                <h2 className={styles.logoutText}>Are you sure you want to logout?</h2>
                <div className={styles.btns}>
                    <button onClick={() => {
                        signOut(auth).then(r => {
                            dispatch(setAuth(false));
                            dispatch(changeLogoutModalStatus(false))
                            window.location.reload();
                        });
                    }
                    } className={`${styles.btn} ${styles.yes}`}>Yes</button>
                    <button onClick={() => {
                        dispatch(changeLogoutModalStatus(false));

                    }} className={styles.btn}>Close</button>
                </div>
            </div>
        </motion.div>
    );
}

export default LogoutModal;