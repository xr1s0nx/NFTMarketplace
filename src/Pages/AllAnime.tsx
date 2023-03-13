import React from 'react';
import AnimeCatalog from "../Components/AnimeCatalog/AnimeCatalog";

function AllAnime() {
    return (
        <div className={'allAnime-page'}>
            <h1>Catalog</h1>
            <AnimeCatalog/>
        </div>
    );
}

export default AllAnime;