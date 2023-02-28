import React from 'react';
import styles from './SignModal.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {
    changeConfirmPasswordInput,
    changeLoginInput,
    changePasswordInput,
    toggleSingModalOpenStatus
} from "../../Redux/Slices/MainSlice";
import {RootState} from "../../Redux/store";
import {AnimatePresence, motion} from "framer-motion";

function SignModal() {

    const dispatch = useDispatch();

    const bgClick = (e: any) => {
        if(e.target === e.currentTarget) {
            dispatch(toggleSingModalOpenStatus());
        }
    }

    const [nowPage, changePage] = React.useState('SignIn');
    const [width, changeWidth] = React.useState(0)

    const {loginInput, passwordInput, confirmPasswordInput} = useSelector((state: RootState) => state.MainSlice)

    const SignInRef: any = React.useRef();
    const SignUpRef: any = React.useRef();

    React.useEffect(() => {
        changeWidth(SignInRef.current.offsetWidth);
    }, [])

    const changeTab = (tab: string) => {
        if(tab === 'SignIn') {
            changeWidth(SignInRef.current.offsetWidth);
        } else if (tab === 'SignUp') {
            changeWidth(SignUpRef.current.offsetWidth);
        }
        changePage(tab)
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.15}}
            exit={{opacity: 0}}
            onClick={(e) => bgClick(e)} className={styles.modal}>
            <div className={styles.block}>
                <div className={styles.top}>
                    <div className={styles.btns}>
                        <button ref={SignInRef} onClick={() => changeTab('SignIn')} className={nowPage === 'SignIn' ? `${styles.btn} ${styles.active}` : styles.btn}>Sign In</button>
                        <button ref={SignUpRef} onClick={() => changeTab('SignUp')} className={nowPage === 'SignUp' ? `${styles.btn} ${styles.active}` : styles.btn}>Sign Up</button>
                    </div>
                </div>
                <div className={styles.underLineWrap}>
                    <span style={nowPage === 'SignIn' ? {marginLeft: '0px', width: `${width}px`} : {marginLeft: `calc(100% - ${width}px)`, width: `${width}px`}} className={styles.activeLine}></span>
                </div>
                <AnimatePresence mode="wait" initial={false}>
                    {nowPage === 'SignIn' ?
                        <motion.div
                            key={"login"}
                            initial={{ x: "-50%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "-50%", opacity: 0, transition: { duration: 0.3 } }}
                        >
                            <input onChange={(e) => dispatch(changeLoginInput(e.target.value))} value={loginInput} type="text" className={styles.input} placeholder={'Email'}/>
                            <input onChange={(e) => dispatch(changePasswordInput(e.target.value))} value={passwordInput} type="password" className={styles.input} placeholder={'Password'}/>
                            <button className={styles.signBtn}>Sign In</button>
                        </motion.div>
                        :
                        <motion.div
                            key={"registration"}
                            initial={{ x: "50%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "50%", opacity: 0, transition: { duration: 0.3 } }}
                            transition={{ delay: 0 }}
                        >
                            <input onChange={(e) => dispatch(changeLoginInput(e.target.value))} value={loginInput} type="text" className={styles.input} placeholder={'Email'}/>
                            <input onChange={(e) => dispatch(changePasswordInput(e.target.value))} value={passwordInput} type="password" className={styles.input} placeholder={'Password'}/>
                            <input onChange={(e) => dispatch(changePasswordInput(e.target.value))} value={passwordInput} type="password" className={styles.input} placeholder={'Confirm Password'}/>
                            <button className={styles.signBtn}>Sign Up</button>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default SignModal;