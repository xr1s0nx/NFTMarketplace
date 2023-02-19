import React from 'react';
import styles from './PopularNfts.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {NavLink} from "react-router-dom";

function PopularNfts() {

    const nfts = useSelector((state: RootState) => state.MainSlice.popularNFTS);

    return (
        <div className={styles.popularNfts}>
            <div className={styles.top}>
                <h2 className={styles.title}>Popular NFT’s Live Auction</h2>
                <NavLink to={'/popular-nfts'} className={styles.more}>
                    Show More
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                        <path d="M9.24997 9C9.24727 9.19878 9.17036 9.38938 9.03435 9.53437L1.53435 17.0344C1.38862 17.154 1.20363 17.2151 1.01534 17.2058C0.827049 17.1966 0.648931 17.1176 0.51563 16.9843C0.382329 16.851 0.303375 16.6729 0.294128 16.4846C0.28488 16.2963 0.345999 16.1113 0.465597 15.9656L7.4406 9L0.465597 2.03437C0.345999 1.88865 0.28488 1.70365 0.294128 1.51536C0.303375 1.32708 0.382329 1.14896 0.51563 1.01566C0.648931 0.882355 0.827049 0.803402 1.01534 0.794153C1.20363 0.784906 1.38862 0.846025 1.53435 0.965624L9.03435 8.46562C9.17036 8.61061 9.24727 8.80121 9.24997 9Z" fill="#fff"/>
                    </svg>
                </NavLink>
            </div>
            <div className={styles.content}>
                {nfts ?
                    nfts.map(item => {
                        return (
                            <div key={item.id} className={styles.nft}>
                                <img src={item.bannerUrl} alt="" className={styles.banner}/>
                                <div className={styles.remainingBlock}>
                                    <div className={styles.info}>
                                        <div className={styles.timeRemainingBlock}>
                                            <span className={styles.icon}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="54" viewBox="0 0 46 54" fill="none">
                                                <g filter="url(#filter0_d_8004_59)">
                                                <path d="M17 4V10H17.01L17 10.01L21 14L17 18L17.01 18.01H17V24H29V18.01H28.99L29 18L25 14L29 10.01L28.99 10H29V4H17ZM27 18.5V22H19V18.5L23 14.5L27 18.5ZM23 13.5L19 9.5V6H27V9.5L23 13.5Z" fill="url(#paint0_linear_8004_59)"/>
                                                </g>
                                                <defs>
                                                <filter id="filter0_d_8004_59" x="0" y="0" width="46" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                <feOffset dy="13"/>
                                                <feGaussianBlur stdDeviation="8.5"/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.54902 0 0 0 0 0.835294 0 0 0 0 0.411765 0 0 0 0.6 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8004_59"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8004_59" result="shape"/>
                                                </filter>
                                                <linearGradient id="paint0_linear_8004_59" x1="16" y1="22.5" x2="32" y2="1" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#50C9C3"/>
                                                <stop offset="1" stopColor="#B6DE96"/>
                                                </linearGradient>
                                                </defs>
                                                </svg>
                                            </span>
                                            <p className={styles.time}>{item.timeRemain.hours}h : {item.timeRemain.minutes}m : {item.timeRemain.seconds}s</p>
                                            <p className={styles.subtitle}>Time Remaining</p>
                                        </div>
                                        <div className={styles.priceBlock}>
                                            <p className={styles.price}>{item.price} ETH</p>
                                            <p className={styles.subtitle}>Highest Bid</p>
                                        </div>
                                    </div>
                                    <button className={styles.place}>Place A Bid</button>
                                </div>
                            </div>
                        )
                    })
                    : null}
            </div>
        </div>
    );
}

export default PopularNfts;