import React, {useEffect} from 'react';
import AnimeItem from "../Components/AnimeItem/AnimeItem";
import ReactHlsPlayer from "react-hls-player";
import axios from "axios";


function Anime() {


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
        <div className={"anime-page"}>
            <AnimeItem/>
        </div>
    );
}

export default Anime;