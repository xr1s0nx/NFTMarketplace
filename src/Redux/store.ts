import { configureStore } from '@reduxjs/toolkit'
import MainSlice from "./Slices/MainSlice";
import animeSlice from "./Slices/AnimeSlice";

export const store = configureStore({
    reducer: {
        MainSlice,
        animeSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch