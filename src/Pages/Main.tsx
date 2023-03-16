import React from 'react';
import PopularCollections from "../Components/PopularCollections/PopularCollections";
import {useSelector} from "react-redux";
import {RootState} from "../Redux/store";
import HotBids from "../Components/HotBids/HotBids";

function Main() {

    const popularNfts = useSelector((state: RootState) => state.MainSlice.popularNFTS);

    return (
        <div className={'main-page'}>
            {popularNfts ?
                <PopularCollections/>
                : null
            }
            <HotBids/>
        </div>
    );
}

export default Main;