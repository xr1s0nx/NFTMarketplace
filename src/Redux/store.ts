import { configureStore } from '@reduxjs/toolkit'
import MainSlice from "./Slices/MainSlice";

export const store = configureStore({
    reducer: {
        MainSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch