import React from 'react';
import styles from './ChangeAvatarModal.module.scss';
import {motion} from "framer-motion";
import {changeAvatarModalStatus} from "../../Redux/Slices/MainSlice";
import {useDispatch} from "react-redux";

function ChangeAvatarModal() {

    const dispatch = useDispatch();

    const bgClick = (e: any) => {
        if(e.target === e.currentTarget) {
            dispatch(changeAvatarModalStatus(false));
        }
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.15}}
            exit={{opacity: 0}}
            className={styles.changeAvatar}
            onClick={(e) => bgClick(e)}>
            <div className={styles.content}>

            </div>
        </motion.div>
    );
}

export default ChangeAvatarModal;