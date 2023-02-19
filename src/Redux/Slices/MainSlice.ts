import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// banners
import banner1 from '../../assets/img/popularNftBanner1.jpg';
import banner2 from '../../assets/img/popularNftBanner2.jpg';

// Top seller avatars
import topSeller1 from '../../assets/img/top-seller1.png';
import topSeller2 from '../../assets/img/top-seller2.png';
import topSeller3 from '../../assets/img/top-seller3.png';
import topSeller4 from '../../assets/img/top-seller4.png';
import topSeller5 from '../../assets/img/top-seller5.png';
import topSeller6 from '../../assets/img/top-seller6.png';


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
    }[] | undefined,
    topSellers: {
        username: string,
        id: number,
        avatarUrl: string,
        partner: boolean,
        totalSellBalance: number,
    }[] | undefined
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
            price: 23.5,
            timeRemain: {
                hours: 13,
                minutes: 29,
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
    ],
    topSellers: [
        {
            username: 'dicar',
            id: 1,
            avatarUrl: topSeller1,
            partner: true,
            totalSellBalance: 232.102
        },
        {
            username: 'astroo2',
            id: 2,
            avatarUrl: topSeller2,
            partner: true,
            totalSellBalance: 172.023
        },
        {
            username: 'micle',
            id: 3,
            avatarUrl: topSeller3,
            partner: false,
            totalSellBalance: 92.002
        },
        {
            username: '11 eror D',
            id: 4,
            avatarUrl: topSeller4,
            partner: false,
            totalSellBalance: 92.002
        },
        {
            username: 'astroo2',
            id: 5,
            avatarUrl: topSeller5,
            partner: true,
            totalSellBalance: 172.023
        },
        {
            username: 'astroo2',
            id: 6,
            avatarUrl: topSeller6,
            partner: true,
            totalSellBalance: 172.023
        },
        {
            username: 'astroo2',
            id: 7,
            avatarUrl: topSeller6,
            partner: true,
            totalSellBalance: 172.023
        },
        {
            username: 'astroo2',
            id: 8,
            avatarUrl: topSeller6,
            partner: true,
            totalSellBalance: 172.023
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