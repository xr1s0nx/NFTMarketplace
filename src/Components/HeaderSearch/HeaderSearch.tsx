import React from 'react';
import styles from './HeaderSearch.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {changeSearchValue} from "../../Redux/Slices/MainSlice";

function HeaderSearch() {

    const searchValue = useSelector((state: RootState) => state.MainSlice.searchValue)

    const dispatch  = useDispatch();

    return (
        <div className={styles.inputWrap}>
            <input onChange={(e) => dispatch(changeSearchValue(e.target.value))} value={searchValue} type="text" className={styles.input} placeholder={'Search by creator or collection'}/>
            <span className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.7659 1.77808C6.24937 1.77808 1.77734 6.25011 1.77734 11.7666C1.77734 17.2832 6.24937 21.7552 11.7659 21.7552C14.045 21.7552 16.1458 20.9919 17.8266 19.707L20.8354 22.708C21.2264 23.098 21.8596 23.0972 22.2496 22.7062C22.6396 22.3151 22.6388 21.682 22.2478 21.292L19.2875 18.3393C20.8236 16.5828 21.7545 14.2834 21.7545 11.7666C21.7545 6.25011 17.2824 1.77808 11.7659 1.77808ZM3.77734 11.7666C3.77734 7.35467 7.35394 3.77808 11.7659 3.77808C16.1779 3.77808 19.7545 7.35467 19.7545 11.7666C19.7545 16.1786 16.1779 19.7552 11.7659 19.7552C7.35394 19.7552 3.77734 16.1786 3.77734 11.7666Z" fill="#fff"/>
                </svg>
            </span>
        </div>
    );
}

export default HeaderSearch;