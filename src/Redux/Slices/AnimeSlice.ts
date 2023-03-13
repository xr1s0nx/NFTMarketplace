import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import collection1 from '../../assets/img/La-temporada-final-de-Attack-on-Titan-lanza-el-poster.png';
import collection2 from '../../assets/img/demon-slayer-season-3.jpg';


export interface anime {
    title?: string,
    id: number,
    episodes?: number,
    genres?: string[],
    image?: string,
}

export interface fullAnimeInfo {
    id?: string,
    title?: string,
    genres?: string[],
    totalEpisodes?: number,
    releaseDate?: string,
    description?: string,
    image?: string,
    status?: string,
    episodes?: {
        id: string,
        number: number,
    }
}

export interface CounterState {
    anime: anime[],
    popularCollections?: {
        id: number,
        title: string,
        imgUrl: string,
        description: string,
        author: {
            uid: string
        }
    }[],
    popularAnime: anime[];
    currentAnime: fullAnimeInfo,
}

const initialState: CounterState = {
    popularCollections: [
        {
            title: 'Attack on Titan all seasons',
            id: 1,
            description: 'Text',
            imgUrl: collection1,
            author: {
                uid: 'AQtwZ4fqwDbWZDfEApF7zSoj8pv1',
            }
        },
        {
            title: 'Demon Slayer',
            id: 2,
            description: 'Text',
            imgUrl: collection2,
            author: {
                uid: 'AQtwZ4fqwDbWZDfEApF7zSoj8pv1'
            }
        }
    ],
    anime: [],
    popularAnime: [],
    currentAnime: {}
}

export const animeSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setAnime: (state, action: PayloadAction<anime[]>) => {
            action.payload.map(item => {
                state.anime.push(item);
            })
        },
        setPopularAnime: (state, action: PayloadAction<anime[]>) => {
            state.popularAnime = action.payload;
        },
        setCurrentAnime: (state, action: PayloadAction<fullAnimeInfo>) => {
            state.currentAnime = action.payload;
        }
    },
})

export const { setAnime, setPopularAnime, setCurrentAnime
} = animeSlice.actions

export default animeSlice.reducer