import React from 'react';
import styles from './Header.module.scss';
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import HeaderButtons from "../HeaderButtons/HeaderButtons";
import {useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import HeaderProfile from "../HeaderProfile/HeaderProfile";

function Header() {

    const profile = useSelector((state: RootState) => state.MainSlice.profile);

    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <HeaderSearch/>
                {profile ?
                    <div className={styles.profile}>
                        <HeaderButtons balance={profile.balance}/>
                        <HeaderProfile avatarUrl={profile.avatarUrl} email={profile.email} username={profile.username}/>
                    </div>
                    : null}
            </div>
        </header>
    );
}

export default Header;