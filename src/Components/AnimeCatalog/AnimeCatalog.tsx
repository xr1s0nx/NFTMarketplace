import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import axios from "axios";
import {setAnime} from "../../Redux/Slices/AnimeSlice";
import AnimeCard from "../AnimeCard/AnimeCard";
import styles from './AnimeCatalog.module.scss';

function AnimeCatalog() {

    const [page, setPage] = useState(1);

    const anime = useSelector((state: RootState) => state.animeSlice.anime);

    const dispatch = useDispatch();

    const getAnime = async (page: number) => {
        const url = 'https://api.consumet.org/anime/gogoanime/top-airing?';
        try {
            const {data} = await axios.get(url, {params: {page}});
            dispatch(setAnime([...data.results]))
        } catch (e) {
            console.log(e);
        }
        if(page === 1) {
            setPage(2);
        }
    }

    useEffect(() => {
        dispatch(setAnime([]));
    }, [])

    useEffect(() => {
        getAnime(page);
    }, [page])

    return (
        <div className={styles.catalog}>
            {anime.map(item => {
                return (
                    <AnimeCard key={item.id} id={item.id} image={item.image} title={item.title}/>
                )
            })}
            <button className={styles.more} onClick={() => setPage(page + 1)}>More</button>
        </div>
    );
}

export default AnimeCatalog;