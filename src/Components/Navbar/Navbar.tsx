import React from 'react';
import styles from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import logo from '../../assets/img/logo.svg'
import main from '../../assets/img/Icon - Home.svg';
import messages from '../../assets/img/Icon - Message.svg';
import cart from '../../assets/img/Icon - Buy.svg';
import analytics from '../../assets/img/Icon - Activity.svg';
import history from '../../assets/img/Icon - Time Circle.svg';
import wallet from '../../assets/img/Icon - Wallet.svg';
import friends from '../../assets/img/Icon - Friends.svg';
import settings from '../../assets/img/Icon - Settings.svg';
import logout from '../../assets/img/Icon - Log Out.svg';

function Navbar() {

    const navLinks = [
        {type: 'link', img: main, link: '/'},
        {type: 'link', img: messages, link: '/messages'},
        {type: 'link', img: cart, link: '/cart'},
        {type: 'link', img: analytics, link: '/analytics'},
        {type: 'link', img: history, link: '/history'},
        {type: 'line', img: '', link: ''},
        {type: 'link', img: wallet, link: '/wallet'},
        {type: 'link', img: friends, link: '/friends'},
        {type: 'link', img: settings, link: '/settings'},
    ]

    const [hideBar, changeVisible] = React.useState(true);

    return (
        <div className={styles.navBar} style={{maxHeight: hideBar ? '140px' : '1195px'}}>
            <button onClick={() => {
                changeVisible(!hideBar);
            }} className={styles.hideBtn} style={{transform: hideBar ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 100 100">
                    <g>
                        <path d="M79.41 65.41c-.39.39-.9.59-1.41.59s-1.02-.2-1.41-.59L50 38.83 23.41 65.41c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83l28-28c.78-.78 2.05-.78 2.83 0l28 28c.79.79.79 2.05 0 2.83z" fill="#000000" data-original="#000000"/>
                    </g>
                </svg>
            </button>
            <div className={styles.content}>
                <NavLink to={'/'} className={styles.logo} >
                    <img src={logo} alt=""/>
                </NavLink>
                {navLinks.map((link, i) => {
                    return (
                        link.type === 'link' ?
                            <NavLink key={i} to={link.link} className={({isActive}) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>
                                <img src={link.img} alt=""/>
                            </NavLink> :
                            <span key={i} className={styles.line}></span>
                    )
                })}
                <button className={styles.logOut}>
                    <img src={logout} alt=""/>
                </button>
            </div>
        </div>
    );
}

export default Navbar;