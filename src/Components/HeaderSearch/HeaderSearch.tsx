import React, {useCallback, useRef, useState} from 'react';
import styles from './HeaderSearch.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {AnimatePresence, motion} from "framer-motion";
import axios from "axios";
import debounce from 'lodash.debounce';
import {changeSearchValue} from "../../Redux/Slices/MainSlice";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import qs from "qs";

function HeaderSearch() {

    const searchValue = useSelector((state: RootState) => state.MainSlice.searchValue)

    interface animeResult {
        id?: string,
        title?: string,
        image?: string,
    }

    const [blur, setBlur] = useState(false);
    const [searchValueTemp, setTempValue] = useState('');
    const [searchResults, setResults] = useState<animeResult[]>([]);
    const [hasNextPage, setNextPage] = useState(false);

    // const [loading, setloading] = useState(false);

    const searchRef: any = useRef();

    const dispatch  = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const onSearchInput = useCallback(
        debounce(
            async (str: string) => {
                dispatch(changeSearchValue(searchRef.current.value));
                getSearch(str);
                if(location.pathname === '/all-anime') {
                    if(str.length > 0) {
                        navigate('/all-anime?search=' + str);
                    } else {
                        navigate('/all-anime');
                    }
                }
            },
            1000
        ),[location]
    )

    React.useEffect(() => {
        if(location.pathname === '/all-anime') {
            setTempValue(qs.parse(location.search.substring(1)).search ? `${qs.parse(location.search.substring(1)).search}` : '');
        } else {
            setTempValue('');
        }
        dispatch(changeSearchValue(''));
    }, [location])

    const changeValue = (e: any) => {
        setTempValue(e.target.value);
        onSearchInput(e.target.value);
    }

    const getSearch = async (value: string) => {
        if(value !== searchRef.current.values) {
            setResults([]);
        }
        try {
            const {data} = await axios.get(`https://api.consumet.org/anime/gogoanime/${value}?page=${1}`, {});
            setResults(data.results);
            setNextPage(data.hasNextPage);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={styles.inputWrap}>
            <input ref={searchRef} onFocus={() => setBlur(false)} onBlur={() => setBlur(true)} onChange={changeValue} onKeyUp={(e) => {
                if(e.key === 'Enter') {
                    navigate('/all-anime?search=' + searchValueTemp);
                }
            }} value={searchValueTemp} type="text" className={styles.input} placeholder={'Search anime'}/>
            <span className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.7659 1.77808C6.24937 1.77808 1.77734 6.25011 1.77734 11.7666C1.77734 17.2832 6.24937 21.7552 11.7659 21.7552C14.045 21.7552 16.1458 20.9919 17.8266 19.707L20.8354 22.708C21.2264 23.098 21.8596 23.0972 22.2496 22.7062C22.6396 22.3151 22.6388 21.682 22.2478 21.292L19.2875 18.3393C20.8236 16.5828 21.7545 14.2834 21.7545 11.7666C21.7545 6.25011 17.2824 1.77808 11.7659 1.77808ZM3.77734 11.7666C3.77734 7.35467 7.35394 3.77808 11.7659 3.77808C16.1779 3.77808 19.7545 7.35467 19.7545 11.7666C19.7545 16.1786 16.1779 19.7552 11.7659 19.7552C7.35394 19.7552 3.77734 16.1786 3.77734 11.7666Z" fill="#fff"/>
                </svg>
            </span>
            <AnimatePresence>
                {searchValue.length > 0 && !blur && location.pathname !== '/all-anime' && searchValueTemp.length > 0?
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.15}}
                        exit={{opacity: 0}}
                        className={styles.searchResults}>
                        <h2 className={styles.title}>Search: {searchValue}</h2>
                        {searchResults.length === 0 ?
                            <p className={styles.notfound}>Not found</p>
                            :
                            searchResults.map((item, i) => {
                                return <NavLink className={styles.result} to={'/anime?id=' + item.id} key={`${item.id}` + i}>
                                    <img src={item.image} alt=""/>
                                    <div className={styles.info}>
                                        <p className={styles.title}>{item.title}</p>
                                    </div>
                                </NavLink>
                            })
                        }
                        {
                            hasNextPage ? <NavLink to={'/all-anime?search=' + searchValue}>See All</NavLink> : null
                        }
                    </motion.div>
                    :
                    null
                }

            </AnimatePresence>

        </div>
    );
}

export default HeaderSearch;