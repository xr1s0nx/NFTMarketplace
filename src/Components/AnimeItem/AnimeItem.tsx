import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {setCurrentAnime} from "../../Redux/Slices/AnimeSlice";
import qs from "qs";
import axios from "axios";
import styles from './AnimeItem.module.scss';
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import ReactHlsPlayer from "react-hls-player";

function AnimeItem() {

    const location = useLocation();

    const currentAnime = useSelector((state: RootState) => state.animeSlice.currentAnime);

    interface streamingLink {
        size: number,
        src: string,
    }

    const [streamingLink, setStreamingLink] = useState('');

    const dispatch = useDispatch();

    const getLink = async (id: string) => {
        const url = "https://api.consumet.org/anime/gogoanime/watch/" + id + '-episode-1';
        try {
            const { data } = await axios.get(url, { params: { server: "gogocdn" } });
            setStreamingLink(data.sources[data.sources.length - 4].url)
        } catch (err) {
        }
    };

    useEffect(() => {
        dispatch(setCurrentAnime({}));
        const {id} = qs.parse(location.search.substr(1));
        const url = `https://api.consumet.org/anime/gogoanime/info/${id}`;
        const getCurrentAnime = async () => {
            try {
                const {data} = await axios.get(url, {});
                dispatch(setCurrentAnime(data));
                getLink(data.id);
            } catch (e) {
                console.log(e);
            }
        };
        getCurrentAnime();
    }, []);

    const playerRef: any = React.useRef();

    function playVideo() {
        playerRef.current.play();
    }

    function pauseVideo() {
        playerRef.current.pause();
    }

    function toggleControls() {
        playerRef.current.controls = !playerRef.current.controls;
    }

    return (
        <div className={styles.animeItem}>
            <div className={styles.imgWrap}>
                <img src={currentAnime.image} alt=""/>
            </div>
            <ReactHlsPlayer
                playerRef={playerRef}
                autoPlay={false}
                controls={true}
                width="100%"
                src={'https://proxy.cors.sh/' + streamingLink}/>
        </div>
    );
}

export default AnimeItem;