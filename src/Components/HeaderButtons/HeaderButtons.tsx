import React from 'react';
import styles from './HeaderButtons.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {setNoticeStatus} from "../../Redux/Slices/MainSlice";

function HeaderButtons({balance}: {balance?: number}) {

    const {hasNotice, profile} = useSelector((state: RootState) => state.MainSlice);
    const dispatch = useDispatch();


    React.useEffect(() => {
        const setNotice = () => {
            dispatch(setNoticeStatus(!!profile.notice?.length))
        }
        setNotice();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profile.notice])

    const openNoticeMenu = () => {
        dispatch(setNoticeStatus(false))
    }

    return (
        <div className={styles.buttons}>
            <div className={styles.balance}>
                <span className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                        <path d="M3 10.0198L8.0329 16.9935V12.9803L3 10.0198Z" fill="#F8FCFF"/>
                        <path d="M8.03296 17.0593L13.0001 10.0198L8.03296 13.0132V17.0593Z" fill="#A5D7FD"/>
                        <path d="M8 7.94081V11.9408L11 9.6733L8 7.94081Z" fill="#4EB2FF"/>
                        <path d="M8 0.940857V6.86191L3 9.16454L8 0.940857Z" fill="#F8FCFF"/>
                        <path d="M13 9.09871L8 6.86186V0.940811L13 9.09871Z" fill="#A5D7FD"/>
                        <path d="M5 9.72425L8 11.9408L7.98039 7.94081L5 9.72425Z" fill="#9DD4FF"/>
                    </svg>
                </span>
                <p className={styles.balanceText}>{balance} ETH</p>
            </div>
            <button className={hasNotice ? `${styles.notification} ${styles.hasNotice}` : styles.notification} onClick={openNoticeMenu}>
                <div className={styles.icon}>
                    <span className={styles.dot}></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
                        <path d="M9.28432 23.6372C9.95087 23.4962 14.0125 23.4962 14.679 23.6372C15.2488 23.7688 15.865 24.0763 15.865 24.7478C15.8319 25.387 15.4569 25.9537 14.9387 26.3136C14.2669 26.8373 13.4784 27.169 12.6542 27.2885C12.1983 27.3476 11.7504 27.3489 11.3105 27.2885C10.4849 27.169 9.69644 26.8373 9.02592 26.3122C8.50646 25.9537 8.13144 25.387 8.09831 24.7478C8.09831 24.0763 8.71451 23.7688 9.28432 23.6372ZM12.0604 0.666672C14.8339 0.666672 17.6671 1.9827 19.35 4.16622C20.4419 5.57222 20.9428 6.97688 20.9428 9.16041V9.72845C20.9428 11.403 21.3854 12.39 22.3594 13.5275C23.0975 14.3654 23.3334 15.4411 23.3334 16.608C23.3334 17.7737 22.9504 18.8802 22.1832 19.7786C21.1787 20.8556 19.7621 21.5431 18.3164 21.6626C16.2213 21.8412 14.125 21.9917 12.0007 21.9917C9.87521 21.9917 7.78015 21.9017 5.68509 21.6626C4.23802 21.5431 2.82144 20.8556 1.8183 19.7786C1.05104 18.8802 0.666748 17.7737 0.666748 16.608C0.666748 15.4411 0.90395 14.3654 1.64073 13.5275C2.6452 12.39 3.05864 11.403 3.05864 9.72845V9.16041C3.05864 6.91779 3.61785 5.45136 4.76941 4.01582C6.4815 1.92227 9.22588 0.666672 11.9411 0.666672H12.0604Z" fill="#373C70"/>
                    </svg>
                </div>
            </button>
            <button className={styles.connect}>
                Connect Wallet
            </button>
        </div>
    );
}

export default HeaderButtons;