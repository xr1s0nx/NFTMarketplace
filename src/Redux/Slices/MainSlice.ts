import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// banners
import banner1 from '../../assets/img/popularNftBanner1.jpg';
import banner2 from '../../assets/img/popularNftBanner2.jpg';

// Hot Bids Images
import hotBids1 from '../../assets/img/hot-bids1.jpg';
import hotBids2 from '../../assets/img/hot-bids2.jpg';
import hotBids3 from '../../assets/img/hot-bids3.jpg';
import hotBids4 from '../../assets/img/hot-bids4.jpg';
import hotBids5 from '../../assets/img/hot-bids5.jpg';
import hotBids6 from '../../assets/img/hot-bids6.jpg';


interface MainState {
    searchValue: string,
    timersStart: boolean,
    profile: {
        uid?: string,
        email?: string,
        balance?: number,
        username?: string,
        imgUrl?: string | null,
        likeBids?: string[],
        stats?: {
            asset: number,
            followers: number,
            likes: number,
            bidding: number,
        },
        newNotice?: {From: string, Message: string}[],
        readNotice?: {From: string, Message: string}[],
        verified?: boolean,
        admin?: boolean,
        followed?: string[],
        watched?: string[],
        watchNow?: string[],
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
        id: string,
        avatarUrl: string,
        verified: boolean,
        totalSellBalance: number,
        admin: boolean
    }[] | undefined,
    hotBids?: {
        id: string,
        time: {
            hours: number,
            minutes: number,
            seconds: number
        },
        likes: number,
        title: string,
        price: number,
        topBuyers: {
            id: number,
            avatarUrl: string | null,
        }[] | null,
        imageUrl: string,
    }[] | undefined,
    profileCardOpen: boolean,
    isAuth: boolean,
    SignModalOpen: boolean,
    loginInput: string,
    passwordInput: string,
    confirmPasswordInput: string,
    logoutModalStatus: boolean,
    newUsername?: string,
    AvatarModalStatus: boolean,
    errorText: string,
    errorStatus: boolean
}

const initialState: MainState = {
    AvatarModalStatus: false,
    SignModalOpen: false,
    newUsername: '',
    isAuth: false,
    searchValue: '',
    profileCardOpen: false,
    profile: {},
    hasNotice: false,
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
    ],
    loginInput: '',
    passwordInput: '',
    confirmPasswordInput: '',
    logoutModalStatus: false,
    timersStart: false,
    errorText: '',
    errorStatus: false,
}


export const mainSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeSearchValue: (state, action:PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        likeBid: (state, action:PayloadAction<string>) => {
            if(!!Object.keys(state.profile).length && state.hotBids) {
                state.hotBids.map(item => {
                    if(item.id === action.payload) {
                        item.likes++
                    }
                    return null;
                })
                if(state.profile.likeBids) {
                    state.profile.likeBids.push(action.payload);
                }
            } else {
                state.SignModalOpen = true;
            }
        },
        unlikeBid: (state, action:PayloadAction<string>) => {
            if(state.profile && state.hotBids) {
                state.hotBids.map(item => {
                    if(item.id === action.payload) {
                        item.likes--
                    }
                    return null;
                })
                if(state.profile.likeBids) {
                    state.profile.likeBids = state.profile.likeBids.filter(item => item !== action.payload)
                }
            }
        },
        profileCardOpenToggle: (state) => {
            state.profileCardOpen = !state.profileCardOpen;
        },
        toggleSingModalOpenStatus: (state) => {
            state.SignModalOpen = !state.SignModalOpen;
        },
        changeLoginInput: (state, action: PayloadAction<string>) => {
            state.loginInput = action.payload;
        },
        changePasswordInput: (state, action: PayloadAction<string>) => {
            state.passwordInput = action.payload;
        },
        changeConfirmPasswordInput: (state, action: PayloadAction<string>) => {
            state.confirmPasswordInput = action.payload;
        },
        setUser: (state, action:PayloadAction<{username?: string, email?: string} | undefined>) => {
            if(action.payload) {
                state.profile = {...action.payload}
            }
        },
        setAuth: (state, action:PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        changeLogoutModalStatus: (state, action:PayloadAction<boolean>) => {
            state.logoutModalStatus = action.payload;
        },
        setNoticeStatus: (state, action: PayloadAction<boolean>) => {
            state.hasNotice = action.payload;
        },
        changeNewUsername: (state, action: PayloadAction<string | undefined>) => {
            state.newUsername = action.payload;
        },
        changeAvatarModalStatus: (state, action:PayloadAction<boolean>) => {
            state.AvatarModalStatus = action.payload;
        },
        setTopSellers: (state, action: PayloadAction<{
            username: string,
            id: string,
            avatarUrl: string,
            verified: boolean,
            totalSellBalance: number,
            admin: boolean
        }[]>) => {
            state.topSellers = [...action.payload]
        },
        setError: (state, action: PayloadAction<{ status: boolean, text: string }>) => {
            state.errorText = action.payload.text;
            state.errorStatus = action.payload.status;
        }
    },
})

export const {
    changeSearchValue, likeBid,
    unlikeBid, profileCardOpenToggle,
    toggleSingModalOpenStatus, changeLoginInput,
    changePasswordInput, changeConfirmPasswordInput,
    setUser, setAuth,
    changeLogoutModalStatus, setNoticeStatus,
    changeNewUsername, changeAvatarModalStatus,
    setTopSellers, setError
    } = mainSlice.actions

export default mainSlice.reducer