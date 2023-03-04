import React from 'react';
import styles from './LoadingScreen.module.scss';
import loadingIcon from '../../assets/img/loading.svg';
import {motion} from "framer-motion";
function LoadingScreen() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.3}}
            exit={{opacity: 0}}
            className={styles.loading}>
            <img src={loadingIcon} alt=""/>
        </motion.div>
    );
}

export default LoadingScreen;