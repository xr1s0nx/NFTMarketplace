import React from 'react';
import styles from './TopSellers.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {NavLink} from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../firebase";
import {profileCardOpenToggle, setTopSellers} from "../../Redux/Slices/MainSlice";
import defaultAvatar from '../../assets/img/defaultAvatar.png';
import Skeleton from "./Skeleton";

function TopSellers() {

    const topSellers = useSelector((state: RootState) => state.MainSlice.topSellers);
    const {uid} = useSelector((state: RootState) => state.MainSlice.profile)
    const [load, setLoading] = React.useState(true);

    const dispatch = useDispatch();

    React.useEffect(() => {
        const getTopSellers = async () => {
            setLoading(true);
            const data = await getDoc(doc(db, 'TopSellers', 'Data'));
            const temp: {
                username: string,
                id: string,
                avatarUrl: string,
                verified: boolean,
                totalSellBalance: number,
                admin: boolean
            }[] = []
            await Promise.all(data.data()?.Users.map(async (item: string) => {
                const user = await getDoc(doc(db, 'Users', item));
                temp.push({
                    username: user.data()?.username,
                    id: user.data()?.uid,
                    avatarUrl: user.data()?.imgUrl,
                    verified: user.data()?.verified,
                    totalSellBalance: user.data()?.sellBalance,
                    admin: user.data()?.admin
                })

            }))
            dispatch(setTopSellers([...temp]))
            setLoading(false);

        }
        if(topSellers?.length === 0) {
            getTopSellers().then(r => console.log(r))
        } else {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.topSellers}>
            <h2 className={styles.title}>
                ⭐ Top Sellers
            </h2>
            <div className={styles.content}>
                {
                    load ?
                        <>
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                        </>
                        :
                        topSellers ?
                                topSellers.map(item => {
                                    return (
                                        <NavLink key={item.id} onClick={() => uid && uid === item.id ? dispatch(profileCardOpenToggle()) : null} to={uid && uid === item.id ? '' : `/seller?id=${item.id}`} className={styles.seller}>
                                            <div className={styles.avatarWrap}>
                                                <img src={item.avatarUrl ? item.avatarUrl : defaultAvatar} alt=""/>
                                            </div>
                                            <div className={styles.info}>
                                                <div className={styles.usernameBlock}>
                                                    <p className={styles.username} style={item.admin ? {color: '#ffdb24'} : {}}>@{item.username}</p>
                                                    {item.admin ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 36 36"><g><circle cx="18" cy="13.72" r="2.86" fill="#FFDB24FF" data-original="#000000" className=""/><path fillRule="evenodd" d="M27.87 6.11A9.14 9.14 0 0 1 23.5 5L18 2l-5.5 3a9.14 9.14 0 0 1-4.37 1.11H4.06V18.8a13.71 13.71 0 0 0 8 12.46L18 34l5.95-2.73a13.71 13.71 0 0 0 8-12.46V6.11zM18 8.57a5.14 5.14 0 1 1-5.14 5.14A5.15 5.15 0 0 1 18 8.57zm4.57 16.57a2.29 2.29 0 0 0-2.29-2.29h-4.57a2.28 2.28 0 0 0-2.28 2.28h-2.29a4.57 4.57 0 0 1 4.57-4.57h4.57a4.58 4.58 0 0 1 4.57 4.57z" fill="#FFDB24FF" data-original="#000000" className=""/></g></svg>
                                                        :
                                                        item.verified ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M11.2686 1.62166C10.0722 0.239069 7.92786 0.239069 6.73146 1.62166L6.19879 2.23723L5.38686 2.17861C3.56324 2.04695 2.04695 3.56324 2.17861 5.38685L2.23723 6.19879L1.62166 6.73146C0.239069 7.92785 0.239069 10.0722 1.62166 11.2686L2.23723 11.8013L2.17861 12.6132C2.04695 14.4368 3.56324 15.9531 5.38686 15.8214L6.19879 15.7628L6.73146 16.3784C7.92785 17.761 10.0722 17.761 11.2686 16.3784L11.8013 15.7628L12.6132 15.8214C14.4368 15.9531 15.9531 14.4368 15.8214 12.6132L15.7628 11.8013L16.3784 11.2686C17.761 10.0722 17.761 7.92786 16.3784 6.73146L15.7628 6.19879L15.8214 5.38686C15.9531 3.56324 14.4368 2.04695 12.6132 2.17861L11.8013 2.23723L11.2686 1.62166ZM12.6962 7.71793C13.0927 7.33346 13.1024 6.70037 12.7179 6.30388C12.3335 5.9074 11.7004 5.89766 11.3039 6.28213L7.87503 9.60708L6.69618 8.46395C6.29969 8.07948 5.6666 8.08922 5.28213 8.4857C4.89766 8.88219 4.9074 9.51528 5.30388 9.89975L7.17888 11.7179C7.56677 12.0941 8.18329 12.0941 8.57118 11.7179L12.6962 7.71793Z" fill="url(#paint0_linear_7998_178)"></path><defs><linearGradient id="paint0_linear_7998_178" x1="0.584717" y1="9.00003" x2="17.4153" y2="9.00003" gradientUnits="userSpaceOnUse"><stop stopColor="#EC008C"></stop><stop offset="1" stopColor="#FC6767"></stop></linearGradient></defs></svg>
                                                            :
                                                            null
                                                    }
                                                </div>
                                                <p className={styles.sellBalance}>${item.totalSellBalance}</p>
                                            </div>
                                        </NavLink>
                                    )
                                })
                                : null

                }


            </div>
        </div>
    );
}

export default TopSellers;