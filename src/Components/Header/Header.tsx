import React from 'react';
import styles from './Header.module.scss';
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import HeaderButtons from "../HeaderButtons/HeaderButtons";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import HeaderProfile from "../HeaderProfile/HeaderProfile";
import {toggleSingModalOpenStatus} from "../../Redux/Slices/MainSlice";

function Header() {

    const profile = useSelector((state: RootState) => state.MainSlice.profile);
    const isAuth = useSelector((state: RootState) => state.MainSlice.isAuth);

    const dispatch = useDispatch();

    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <HeaderSearch/>
                {!!Object.keys(profile).length && isAuth ?
                    <div className={styles.profile}>
                        <HeaderButtons balance={profile.balance}/>
                        <HeaderProfile avatarUrl={profile.imgUrl} email={profile.email} username={profile.username}/>
                    </div>
                    : <button onClick={() => dispatch(toggleSingModalOpenStatus())} className={styles.signBtn}>Sign In</button>}
            </div>
        </header>
    );
}

export default Header;