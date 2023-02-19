import React from 'react';
import PopularNfts from "../Components/PopularNfts/PopularNfts";
import TopSellers from "../Components/TopSellers/TopSellers";
import {useSelector} from "react-redux";
import {RootState} from "../Redux/store";

function Main() {

    const popularNfts = useSelector((state: RootState) => state.MainSlice.popularNFTS);

    return (
        <div className={'main-page'}>
            {popularNfts ?
                <PopularNfts/>
                : null
            }
            <TopSellers/>
        </div>
    );
}

export default Main;