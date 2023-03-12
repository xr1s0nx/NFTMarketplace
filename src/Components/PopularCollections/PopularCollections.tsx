import React from 'react';
import styles from './PopularNfts.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {NavLink} from "react-router-dom";

function PopularCollections() {

    const popularCollections = useSelector((state: RootState) => state.animeSlice.popularCollections);
    const dispatch = useDispatch();

    React.useEffect(() => {

    }, [])

    return (
        <div className={styles.popularNfts}>
            <div className={styles.top}>
                <h2 className={styles.title}>Popular Collections</h2>
                <NavLink to={'/popular-nfts'} className={styles.more}>
                    Show More
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                        <path d="M9.24997 9C9.24727 9.19878 9.17036 9.38938 9.03435 9.53437L1.53435 17.0344C1.38862 17.154 1.20363 17.2151 1.01534 17.2058C0.827049 17.1966 0.648931 17.1176 0.51563 16.9843C0.382329 16.851 0.303375 16.6729 0.294128 16.4846C0.28488 16.2963 0.345999 16.1113 0.465597 15.9656L7.4406 9L0.465597 2.03437C0.345999 1.88865 0.28488 1.70365 0.294128 1.51536C0.303375 1.32708 0.382329 1.14896 0.51563 1.01566C0.648931 0.882355 0.827049 0.803402 1.01534 0.794153C1.20363 0.784906 1.38862 0.846025 1.53435 0.965624L9.03435 8.46562C9.17036 8.61061 9.24727 8.80121 9.24997 9Z" fill="#fff"/>
                    </svg>
                </NavLink>
            </div>
            <div className={styles.content}>
                {popularCollections ?
                    popularCollections.map(item => {
                        return (
                            <div key={item.id} className={styles.nft}>
                                <img src={item.imgUrl} alt="" className={styles.banner}/>
                                <div className={styles.remainingBlock}>
                                    <div className={styles.info}>
                                        <p className={styles.title}>{item.title}</p>
                                        <p className={styles.subtitle}>{item.description}</p>
                                    </div>
                                    <NavLink to={`/collection?id=${item.id}`} className={styles.place}>Open</NavLink>
                                </div>
                            </div>
                        )
                    })
                    : null}
            </div>
        </div>
    );
}

export default PopularCollections;
