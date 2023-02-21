import React from 'react';
import styles from './HeaderProfile.module.scss';
import defaultAvatar from '../../assets/img/defaultAvatar.png';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {profileCardOpenToggle} from "../../Redux/Slices/MainSlice";

function HeaderProfile({avatarUrl, username, email}: {avatarUrl: string | null, username: string, email: string}) {

    const profileCardOpen = useSelector((state: RootState) => state.MainSlice.profileCardOpen);
    const dispatch = useDispatch();

    return (
        <div className={styles.profile}>
            <div className={styles.content}>
                <div className={styles.avatarWrap}>
                    <img src={avatarUrl ? avatarUrl : defaultAvatar} alt=""/>
                </div>
                <div className={styles.info}>
                    <p className={styles.username}>{username}</p>
                    <p className={styles.email}>{email}</p>
                </div>
                <button onClick={() => dispatch(profileCardOpenToggle())} className={profileCardOpen ? `${styles.settingsBtn} ${styles.active}` : styles.settingsBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
                        <path d="M8.99997 9.18318C8.80119 9.18048 8.61059 9.10364 8.4656 8.96774L0.965596 1.47414C0.845999 1.32855 0.78488 1.14371 0.794128 0.955578C0.803375 0.76745 0.882328 0.589484 1.01563 0.456297C1.14893 0.323109 1.32705 0.244224 1.51534 0.234984C1.70363 0.225744 1.88862 0.286811 2.03435 0.406306L8.99997 7.37535L15.9656 0.406306C16.1113 0.286811 16.2963 0.225744 16.4846 0.234984C16.6729 0.244224 16.851 0.323109 16.9843 0.456297C17.1176 0.589484 17.1966 0.76745 17.2058 0.955578C17.2151 1.14371 17.1539 1.32855 17.0343 1.47414L9.53435 8.96774C9.38935 9.10364 9.19876 9.18048 8.99997 9.18318Z" fill="#AFB5C0"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default HeaderProfile;