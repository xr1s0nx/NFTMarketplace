import React from 'react';
import styles from "./AnimeCatd.module.scss";
import timerBg from "../../assets/img/bid-timer-bg.svg";
import {toggleSingModalOpenStatus} from "../../Redux/Slices/MainSlice";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../firebase";

function AnimeCard({id, image, title}: {id: string, image?: string, title?: string}) {

    const profile = useSelector((state: RootState) => state.MainSlice.profile);

    const dispatch = useDispatch();

    const like = async (id: string) => {
        if(profile.likeBids) {
            const userDoc = doc(db, 'Users', `${profile.uid}`);
            await updateDoc(userDoc, {...profile, likeBids: [...profile.likeBids, id]});
        }
    }

    const unlike = async (id: string) => {
        if(profile.likeBids) {
            const userDoc = doc(db, 'Users', `${profile.uid}`);
            await updateDoc(userDoc, {...profile, likeBids: profile.likeBids.filter(item => item !== id)});
        }
    }

    return (
        <div key={id} className={styles.bid}>
            <NavLink className={styles.bidImage} to={'/anime?id=' + id}>
                <img src={image} alt=""/>
            </NavLink>
            <p className={styles.bidTitle}>{title}</p>
            <div className={styles.likesBlock}>
                {
                    !!Object.keys(profile).length ?
                        // @ts-ignore
                        profile.likeBids.some(item => item === id) ?
                            <button className={styles.like} onClick={() => unlike(id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.7771 0.84705C14.9596 0.263837 12.6306 0.497968 11.0259 1.98241C9.41377 0.562564 7.16544 0.250495 5.31483 0.847423C1.09359 2.20632 -0.206918 7.07624 0.970463 10.7521C1.91788 13.7009 3.96125 15.8794 5.93772 17.309C6.92986 18.0266 7.9241 18.5697 8.79128 18.9367C9.62558 19.2898 10.4411 19.5222 11.0515 19.5222C11.6653 19.5222 12.4862 19.2839 13.3226 18.9267C14.1933 18.5549 15.1916 18.0062 16.1862 17.2851C18.1652 15.8501 20.2108 13.6711 21.1307 10.7486C22.3062 7.07131 20.9951 2.20507 16.7771 0.84705ZM14.8913 4.56928C14.3419 4.51284 13.8508 4.91245 13.7944 5.46185C13.7379 6.01124 14.1376 6.50237 14.6869 6.55881C15.0385 6.59492 15.2764 6.74116 15.4328 6.93894C15.5956 7.14488 15.7227 7.47605 15.7067 7.9525C15.6882 8.50448 16.1206 8.96696 16.6726 8.98548C17.2246 9.004 17.6871 8.57156 17.7056 8.01958C17.7346 7.15504 17.5067 6.33721 17.0015 5.6984C16.4899 5.05143 15.7468 4.65717 14.8913 4.56928Z" fill="url(#paint0_linear_7998_150)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_7998_150" x1="0.556641" y1="10.0372" x2="21.5421" y2="10.0372" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#DA22FF"/>
                                            <stop offset="1" stopColor="#9733EE"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </button>
                            :
                            <button className={styles.unlike} onClick={() => like(id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.1652 2.75129C14.6235 2.25681 12.7985 2.65593 11.8862 4.03972C11.7055 4.31382 11.4017 4.48175 11.0735 4.48904C10.7453 4.49633 10.4344 4.34205 10.2417 4.07625C9.23567 2.68864 7.42965 2.26651 5.92839 2.75096C3.11598 3.65618 1.90612 7.117 2.87453 10.141C3.65319 12.5639 5.3602 14.4232 7.1096 15.6885C7.98045 16.3184 8.84309 16.7871 9.57053 17.0949C10.3309 17.4167 10.8477 17.5223 11.0513 17.5223C11.2521 17.5223 11.7704 17.4148 12.5369 17.0875C13.2691 16.7748 14.1373 16.3001 15.0119 15.666C16.7706 14.3908 18.4729 12.5326 19.2233 10.1463L19.2249 10.1415C20.192 7.11924 18.978 3.65716 16.1652 2.75129ZM11.0257 1.98247C12.6303 0.498029 14.9593 0.263898 16.7768 0.847111C20.9949 2.20514 22.306 7.07137 21.1305 10.7487C20.2106 13.6712 18.165 15.8502 16.1859 17.2851C15.1914 18.0062 14.193 18.5549 13.3224 18.9268C12.4859 19.284 11.665 19.5223 11.0513 19.5223C10.4408 19.5223 9.62534 19.2899 8.79103 18.9368C7.92385 18.5698 6.92962 18.0267 5.93747 17.3091C3.961 15.8795 1.91764 13.7009 0.970219 10.7522C-0.207162 7.0763 1.09334 2.20638 5.31458 0.847484M11.0257 1.98247C9.41353 0.562625 7.1652 0.250556 5.31458 0.847484L11.0257 1.98247Z" fill="url(#paint0_linear_7998_127)"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.7944 5.46184C13.8508 4.91245 14.3419 4.51283 14.8913 4.56927C15.7468 4.65716 16.4899 5.05142 17.0015 5.69839C17.5067 6.33721 17.7346 7.15503 17.7056 8.01958C17.687 8.57155 17.2246 9.004 16.6726 8.98547C16.1206 8.96695 15.6882 8.50447 15.7067 7.9525C15.7227 7.47605 15.5956 7.14487 15.4327 6.93893C15.2763 6.74116 15.0384 6.59491 14.6869 6.5588C14.1375 6.50236 13.7379 6.01123 13.7944 5.46184Z" fill="url(#paint1_linear_7998_127)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_7998_127" x1="0.556396" y1="10.0373" x2="21.5419" y2="10.0373" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#DA22FF"/>
                                            <stop offset="1" stopColor="#9733EE"/>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_7998_127" x1="0.556396" y1="10.0373" x2="21.5419" y2="10.0373" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#DA22FF"/>
                                            <stop offset="1" stopColor="#9733EE"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </button>
                        : <button className={styles.unlike} onClick={() => dispatch(toggleSingModalOpenStatus())}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.1652 2.75129C14.6235 2.25681 12.7985 2.65593 11.8862 4.03972C11.7055 4.31382 11.4017 4.48175 11.0735 4.48904C10.7453 4.49633 10.4344 4.34205 10.2417 4.07625C9.23567 2.68864 7.42965 2.26651 5.92839 2.75096C3.11598 3.65618 1.90612 7.117 2.87453 10.141C3.65319 12.5639 5.3602 14.4232 7.1096 15.6885C7.98045 16.3184 8.84309 16.7871 9.57053 17.0949C10.3309 17.4167 10.8477 17.5223 11.0513 17.5223C11.2521 17.5223 11.7704 17.4148 12.5369 17.0875C13.2691 16.7748 14.1373 16.3001 15.0119 15.666C16.7706 14.3908 18.4729 12.5326 19.2233 10.1463L19.2249 10.1415C20.192 7.11924 18.978 3.65716 16.1652 2.75129ZM11.0257 1.98247C12.6303 0.498029 14.9593 0.263898 16.7768 0.847111C20.9949 2.20514 22.306 7.07137 21.1305 10.7487C20.2106 13.6712 18.165 15.8502 16.1859 17.2851C15.1914 18.0062 14.193 18.5549 13.3224 18.9268C12.4859 19.284 11.665 19.5223 11.0513 19.5223C10.4408 19.5223 9.62534 19.2899 8.79103 18.9368C7.92385 18.5698 6.92962 18.0267 5.93747 17.3091C3.961 15.8795 1.91764 13.7009 0.970219 10.7522C-0.207162 7.0763 1.09334 2.20638 5.31458 0.847484M11.0257 1.98247C9.41353 0.562625 7.1652 0.250556 5.31458 0.847484L11.0257 1.98247Z" fill="url(#paint0_linear_7998_127)"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.7944 5.46184C13.8508 4.91245 14.3419 4.51283 14.8913 4.56927C15.7468 4.65716 16.4899 5.05142 17.0015 5.69839C17.5067 6.33721 17.7346 7.15503 17.7056 8.01958C17.687 8.57155 17.2246 9.004 16.6726 8.98547C16.1206 8.96695 15.6882 8.50447 15.7067 7.9525C15.7227 7.47605 15.5956 7.14487 15.4327 6.93893C15.2763 6.74116 15.0384 6.59491 14.6869 6.5588C14.1375 6.50236 13.7379 6.01123 13.7944 5.46184Z" fill="url(#paint1_linear_7998_127)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_7998_127" x1="0.556396" y1="10.0373" x2="21.5419" y2="10.0373" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#DA22FF"/>
                                        <stop offset="1" stopColor="#9733EE"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_7998_127" x1="0.556396" y1="10.0373" x2="21.5419" y2="10.0373" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#DA22FF"/>
                                        <stop offset="1" stopColor="#9733EE"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </button>
                }
            </div>

        </div>
    );
}

export default AnimeCard;