import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import axios from "axios";
import {clearAnime, setAnime} from "../../Redux/Slices/AnimeSlice";
import AnimeCard from "../AnimeCard/AnimeCard";
import styles from './AnimeCatalog.module.scss';
import {useLocation} from "react-router-dom";
import loadingBtn from '../../assets/img/button-loading.svg';
import qs from "qs";

function AnimeCatalog() {

    const [page, setPage] = useState(1);
    const [buttonVisible, changeVisible] = useState(true);
    const [loading, setLoading] = useState(false);

    const anime = useSelector((state: RootState) => state.animeSlice.anime);

    const dispatch = useDispatch();
    const location = useLocation();

    const getAnime = async (pageTemp: number) => {
        setLoading(true);
        const url = qs.parse(location.search.substring(1)).search ? `https://api.consumet.org/anime/gogoanime/${qs.parse(location.search.substring(1)).search}` :
            'https://api.consumet.org/anime/gogoanime/top-airing?';
        try {
            const {data} = await axios.get(url, {params: {page: pageTemp}});
            dispatch(setAnime([...data.results]))
            setPage(pageTemp + 1)
            changeVisible(data.hasNextPage)
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        dispatch(clearAnime());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
            if (qs.parse(location.search.substring(1)).search) {
                dispatch(clearAnime())
                getAnime(1);
            }
            else {
                dispatch(clearAnime());
                for (let i = 1; i <= 2; i++) {
                    getAnime(i);
                }
                setPage(3);
            }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    return (
        <>
            <div className={styles.catalog}>
                {!loading && anime.length === 0 ?
                    <p className={styles.notFound}>Anime not found</p>
                    :
                    anime.map((item, i) => {
                    return (
                    <AnimeCard key={item.id + i} id={item.id} image={item.image} title={item.title}/>
                    )
                })
                }
                {}
            </div>
            {buttonVisible ?
                <button disabled={loading} className={styles.more} onClick={async () => {
                    getAnime(page);
                }}>
                    {loading ? <img src={loadingBtn}/> : 'More'}
                </button> : null
            }

        </>


    );
}

export default AnimeCatalog;