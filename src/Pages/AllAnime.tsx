import React, {useEffect, useState} from 'react';
import AnimeCatalog from "../Components/AnimeCatalog/AnimeCatalog";
import {useLocation} from "react-router-dom";
import qs from "qs";

function AllAnime() {

    const location = useLocation();
    const [title, setTitle] = useState('');

    useEffect(() => {
        const search = qs.parse(location.search.substring(1)).search;
        if(search) {
            setTitle('Search: ' + search);
        } else {
            setTitle('All anime');
        }
    }, [location])

    return (
        <div className={'allAnime-page'}>
            <h1>{title}</h1>
            <AnimeCatalog/>
        </div>
    );
}

export default AllAnime;