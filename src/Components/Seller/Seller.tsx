import React, {useEffect, useState} from 'react';
import qs from 'qs';
import {useLocation} from "react-router-dom";
import {doc, onSnapshot, updateDoc} from "firebase/firestore";
import {db} from "../../firebase";
import styles from './Seller.module.scss';
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import {useSelector} from "react-redux";
import {RootState} from "../../Redux/store";

function Seller() {

    const location = useLocation();

    const {followed, uid} = useSelector((state: RootState) => state.MainSlice.profile);
    const profile = useSelector((state: RootState) => state.MainSlice.profile);

    interface UserTypes {
        username: string,
        imgUrl: string,
        admin: boolean,
        verified: boolean,
        uid: string,
    }

    const [user, setCurrentUser] = useState<UserTypes>();
    const [loading, setLoading] = useState(true);
    const [follow, setFollow] = useState(false);

    useEffect(() => {
        setLoading(true)
        const log = qs.parse(location.search.substr(1));
        followed?.map(item => {
            if(item === log.id) {
                setFollow(true);
            }
            return 0;
        })
        const getUser = async () => {
            await onSnapshot(doc(db, 'Users', `${log.id}`), (user) => {
                setCurrentUser({
                    username: user.data()?.username,
                    imgUrl: user.data()?.imgUrl,
                    admin: user.data()?.admin,
                    verified: user.data()?.verefied,
                    uid: user.data()?.uid,
                })
            })
            setLoading(false);
        }

        getUser();
    }, [location, followed])

    const FollowUser = async () => {
        const userDoc = doc(db, 'Users', `${uid}`);
        if(follow) {
            await updateDoc(userDoc, {...profile, followed: followed?.filter(item => item !== user?.uid)});
            setFollow(false);
        } else if(uid && followed !== undefined) {
            await updateDoc(userDoc, {...profile, followed: [...followed, user?.uid]});
            setFollow(true);
        }
    }


    return (
        <>
            {loading ?
                <LoadingScreen/>
                :
                <div className={styles.seller}>
                    <img src={user?.imgUrl} alt="" className={styles.avatar}/>
                    <div className={styles.usernameBlock}>
                        <p className={styles.username} style={user?.admin ? {color: '#ffdb24'} : {}}>@{user?.username}</p>
                        {user?.admin ?
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 36 36"><g><circle cx="18" cy="13.72" r="2.86" fill="#FFDB24FF" data-original="#000000" className=""/><path fillRule="evenodd" d="M27.87 6.11A9.14 9.14 0 0 1 23.5 5L18 2l-5.5 3a9.14 9.14 0 0 1-4.37 1.11H4.06V18.8a13.71 13.71 0 0 0 8 12.46L18 34l5.95-2.73a13.71 13.71 0 0 0 8-12.46V6.11zM18 8.57a5.14 5.14 0 1 1-5.14 5.14A5.15 5.15 0 0 1 18 8.57zm4.57 16.57a2.29 2.29 0 0 0-2.29-2.29h-4.57a2.28 2.28 0 0 0-2.28 2.28h-2.29a4.57 4.57 0 0 1 4.57-4.57h4.57a4.58 4.58 0 0 1 4.57 4.57z" fill="#FFDB24FF" data-original="#000000" className=""/></g></svg>
                            :
                            user?.verified ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M11.2686 1.62166C10.0722 0.239069 7.92786 0.239069 6.73146 1.62166L6.19879 2.23723L5.38686 2.17861C3.56324 2.04695 2.04695 3.56324 2.17861 5.38685L2.23723 6.19879L1.62166 6.73146C0.239069 7.92785 0.239069 10.0722 1.62166 11.2686L2.23723 11.8013L2.17861 12.6132C2.04695 14.4368 3.56324 15.9531 5.38686 15.8214L6.19879 15.7628L6.73146 16.3784C7.92785 17.761 10.0722 17.761 11.2686 16.3784L11.8013 15.7628L12.6132 15.8214C14.4368 15.9531 15.9531 14.4368 15.8214 12.6132L15.7628 11.8013L16.3784 11.2686C17.761 10.0722 17.761 7.92786 16.3784 6.73146L15.7628 6.19879L15.8214 5.38686C15.9531 3.56324 14.4368 2.04695 12.6132 2.17861L11.8013 2.23723L11.2686 1.62166ZM12.6962 7.71793C13.0927 7.33346 13.1024 6.70037 12.7179 6.30388C12.3335 5.9074 11.7004 5.89766 11.3039 6.28213L7.87503 9.60708L6.69618 8.46395C6.29969 8.07948 5.6666 8.08922 5.28213 8.4857C4.89766 8.88219 4.9074 9.51528 5.30388 9.89975L7.17888 11.7179C7.56677 12.0941 8.18329 12.0941 8.57118 11.7179L12.6962 7.71793Z" fill="url(#paint0_linear_7998_178)"></path><defs><linearGradient id="paint0_linear_7998_178" x1="0.584717" y1="9.00003" x2="17.4153" y2="9.00003" gradientUnits="userSpaceOnUse"><stop stopColor="#EC008C"></stop><stop offset="1" stopColor="#FC6767"></stop></linearGradient></defs></svg>
                                :
                                null
                        }
                    </div>
                    <button className={styles.follow} onClick={FollowUser}>{
                        follow ? 'Unfollow' : 'Follow'
                    }</button>
                </div>

            }
        </>

    );
}

export default Seller;