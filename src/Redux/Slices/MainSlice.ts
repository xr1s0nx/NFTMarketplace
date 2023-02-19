import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import banner1 from '../../assets/img/popularNftBanner1.jpg';
import banner2 from '../../assets/img/popularNftBanner2.jpg';
interface MainState {
    searchValue: string,
    profile?: {
        email: string,
        balance: number,
        username: string,
        avatarUrl: string | null,
    },
    hasNotice: boolean
    popularNFTS: {
        id: number,
        bannerUrl: string,
        price: number,
        timeRemain: {
            hours: number,
            minutes: number,
            seconds: number,
        }
    }[]
}

const initialState: MainState = {
    searchValue: '',
    profile: {
        email: 'artem.gumerov.05@gmail.com',
        balance: 3.5,
        username: 'xr1s0nx',
        avatarUrl: 'https://i.pinimg.com/736x/ef/cb/5a/efcb5aff8710f5fb321065027cb149b2.jpg',
    },
    hasNotice: true,
    popularNFTS: [
        {
            id: 1,
            bannerUrl: banner1,
            price: 17.53,
            timeRemain: {
                hours: 18,
                minutes: 35,
                seconds: 59,
            }
        },
        {
            id: 2,
            bannerUrl: banner2,
            price: 17.53,
            timeRemain: {
                hours: 18,
                minutes: 35,
                seconds: 59,
            }
        },
    ]
}

export const mainSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeSearchValue: (state, action:PayloadAction<string>) => {
            state.searchValue = action.payload;
        }
    },
})

export const { changeSearchValue,  } = mainSlice.actions

export default mainSlice.reducer