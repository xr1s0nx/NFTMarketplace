import React from 'react';
import styles from './ProfileCard.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import defaultAvatar from '../../assets/img/defaultAvatar.png';
import {NavLink} from "react-router-dom";
import bg from '../../assets/img/profile-card-bg.png';

function ProfileCard() {

    const profile = useSelector((state: RootState) => state.MainSlice.profile);

    return (
        <>
            {profile && profile.stats ?
                <div className={styles.profileCard}>
                    <span className={styles.bg}>
                        <img src={bg} alt=""/>
                    </span>
                    <h2 className={styles.title}>My Profile</h2>
                    <NavLink to={'/profile'} className={styles.avatarWrap}>
                        <img src={profile && profile.avatarUrl ? profile.avatarUrl : defaultAvatar} alt=""/>
                    </NavLink>
                    <p className={styles.username}>{profile.username}</p>
                    <div className={styles.stats}>
                            <div className={styles.stat}>
                                <div className={styles.content}>
                                    <p className={styles.text}>{profile.stats.asset > 1000 ? `${profile.stats.asset / 1000 | 0}k` : profile.stats.asset}</p>
                                    <p className={styles.subtitle}>Asset</p>
                                </div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.content}>
                                    <p className={styles.text}>{profile.stats.followers > 1000 ? `${profile.stats.followers / 1000 | 0}k` : profile.stats.followers}</p>
                                    <p className={styles.subtitle}>Followers</p>
                                </div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.content}>
                                    <p className={styles.text}>{profile.stats.likes > 1000 ? `${profile.stats.likes / 1000 | 0}k` : profile.stats.likes}</p>
                                    <p className={styles.subtitle}>Likes</p>
                                </div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.content}>
                                    <p className={styles.text}>{profile.stats.bidding > 1000 ? `${profile.stats.bidding / 1000 | 0}k` : profile.stats.bidding}</p>
                                    <p className={styles.subtitle}>Bidding</p>
                                </div>
                            </div>
                    </div>
                </div>
                : null
            }
        </>
    );
}

export default ProfileCard;