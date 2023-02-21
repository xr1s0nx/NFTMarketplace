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

// Hot Bids Images
import hotBids1 from '../../assets/img/hot-bids1.jpg';
import hotBids2 from '../../assets/img/hot-bids2.jpg';
import hotBids3 from '../../assets/img/hot-bids3.jpg';
import hotBids4 from '../../assets/img/hot-bids4.jpg';
import hotBids5 from '../../assets/img/hot-bids5.jpg';
import hotBids6 from '../../assets/img/hot-bids6.jpg';


interface MainState {
    searchValue: string,
    profile?: {
        email: string,
        balance: number,
        username: string,
        avatarUrl: string | null,
        likeBids: number[],
        stats: {
            asset: number,
            followers: number,
            likes: number,
            bidding: number,
        }
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
    }[] | undefined,
    hotBids?: {
        id: number,
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
}

const initialState: MainState = {
    searchValue: '',
    profileCardOpen: true,
    profile: {
        email: 'artem.gumerov.05@gmail.com',
        balance: 3.5,
        username: 'xr1s0nx',
        avatarUrl: 'https://i.pinimg.com/736x/ef/cb/5a/efcb5aff8710f5fb321065027cb149b2.jpg',
        likeBids: [1, 3, 6],
        stats: {
            asset: 120,
            followers: 10050,
            likes: 70512,
            bidding: 60,
        }
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
    ],
    hotBids: [
        {
            id: 1,
            time: {
                hours: 0,
                minutes: 2,
                seconds: 7
            },
            likes: 232,
            title: 'Stretch Of Time',
            price: 0.045,
            topBuyers: [
                {
                    id: 10,
                    avatarUrl: 'https://i.pinimg.com/736x/80/17/86/80178693d1d0c7e0ec688707b02ecc0b.jpg'
                },
                {
                    id: 11,
                    avatarUrl: 'https://i.pinimg.com/originals/35/cc/60/35cc6077af03da9d88bf14d5de6004f5.jpg'
                },
                {
                    id: 12,
                    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdL5VJd4EhQXRR-_HaJZkfE5CEz0zpKggDFw&usqp=CAU'
                }
            ],
            imageUrl: hotBids1
        },
        {
            id: 2,
            time: {
                hours: 1,
                minutes: 35,
                seconds: 45
            },
            likes: 232,
            title: 'Arcade Land',
            price: 0.045,
            topBuyers: [
                {
                    id: 10,
                    avatarUrl: 'https://i.pinimg.com/736x/80/17/86/80178693d1d0c7e0ec688707b02ecc0b.jpg'
                },
                {
                    id: 11,
                    avatarUrl: 'https://i.pinimg.com/originals/35/cc/60/35cc6077af03da9d88bf14d5de6004f5.jpg'
                },
                {
                    id: 12,
                    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdL5VJd4EhQXRR-_HaJZkfE5CEz0zpKggDFw&usqp=CAU'
                }
            ],
            imageUrl: hotBids2
        },
        {
            id: 3,
            time: {
                hours: 2,
                minutes: 32,
                seconds: 7
            },
            likes: 232,
            title: 'Shinsekai Portal',
            price: 0.045,
            topBuyers: [
                {
                    id: 10,
                    avatarUrl: 'https://i.pinimg.com/736x/80/17/86/80178693d1d0c7e0ec688707b02ecc0b.jpg'
                },
                {
                    id: 11,
                    avatarUrl: 'https://i.pinimg.com/originals/35/cc/60/35cc6077af03da9d88bf14d5de6004f5.jpg'
                },
                {
                    id: 12,
                    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdL5VJd4EhQXRR-_HaJZkfE5CEz0zpKggDFw&usqp=CAU'
                }
            ],
            imageUrl: hotBids3
        },
        {
            id: 4,
            time: {
                hours: 2,
                minutes: 32,
                seconds: 7
            },
            likes: 232,
            title: 'Paper Cut',
            price: 0.045,
            topBuyers: [
                {
                    id: 10,
                    avatarUrl: 'https://i.pinimg.com/736x/80/17/86/80178693d1d0c7e0ec688707b02ecc0b.jpg'
                },
                {
                    id: 11,
                    avatarUrl: 'https://i.pinimg.com/originals/35/cc/60/35cc6077af03da9d88bf14d5de6004f5.jpg'
                },
                {
                    id: 12,
                    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdL5VJd4EhQXRR-_HaJZkfE5CEz0zpKggDFw&usqp=CAU'
                }
            ],
            imageUrl: hotBids4
        },
        {
            id: 5,
            time: {
                hours: 2,
                minutes: 32,
                seconds: 7
            },
            likes: 232,
            title: 'Cyber Brokers',
            price: 0.045,
            topBuyers: [
                {
                    id: 10,
                    avatarUrl: 'https://i.pinimg.com/736x/80/17/86/80178693d1d0c7e0ec688707b02ecc0b.jpg'
                },
                {
                    id: 11,
                    avatarUrl: 'https://i.pinimg.com/originals/35/cc/60/35cc6077af03da9d88bf14d5de6004f5.jpg'
                },
                {
                    id: 12,
                    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdL5VJd4EhQXRR-_HaJZkfE5CEz0zpKggDFw&usqp=CAU'
                }
            ],
            imageUrl: hotBids5
        },
        {
            id: 6,
            time: {
                hours: 2,
                minutes: 32,
                seconds: 7
            },
            likes: 232,
            title: 'Akuma Origins',
            price: 0.045,
            topBuyers: [
                {
                    id: 10,
                    avatarUrl: 'https://i.pinimg.com/736x/80/17/86/80178693d1d0c7e0ec688707b02ecc0b.jpg'
                },
                {
                    id: 11,
                    avatarUrl: 'https://i.pinimg.com/originals/35/cc/60/35cc6077af03da9d88bf14d5de6004f5.jpg'
                },
                {
                    id: 12,
                    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdL5VJd4EhQXRR-_HaJZkfE5CEz0zpKggDFw&usqp=CAU'
                }
            ],
            imageUrl: hotBids6
        }
    ]
}

export const mainSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeSearchValue: (state, action:PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        likeBid: (state, action:PayloadAction<number>) => {
            if(state.profile && state.hotBids) {
                state.hotBids.map(item => {
                    if(item.id === action.payload) {
                        item.likes++
                    }
                    return null;
                })
                state.profile.likeBids.push(action.payload);
            }
        },
        unlike: (state, action:PayloadAction<number>) => {
            if(state.profile && state.hotBids) {
                state.hotBids.map(item => {
                    if(item.id === action.payload) {
                        item.likes--
                    }
                    return null;
                })
                state.profile.likeBids = state.profile.likeBids.filter(item => item !== action.payload)
            }
        },
        bidsTimerStart: (state) => {
            if(state.hotBids) {
               state.hotBids.map(item => {
                   if(item.time.seconds - 1 <= 0) {
                       if(item.time.minutes - 1 < 0) {
                           if(item.time.hours - 1 < 0) {
                               item.time = {
                                   hours: 0,
                                   minutes: 0,
                                   seconds: 0,
                               }
                           } else {
                               item.time.hours --
                               item.time.minutes = 59
                           }
                       } else {
                           item.time.minutes --
                           item.time.seconds = 59
                       }
                   } else {
                       item.time.seconds --
                   }
                   return null;
               })
            }
        },
        popularTimerStart: (state) => {
            if(state.popularNFTS) {
                state.popularNFTS.map(item => {
                    if(item.timeRemain.seconds - 1 <= 0) {
                        if(item.timeRemain.minutes - 1 < 0) {
                            if(item.timeRemain.hours - 1 < 0) {
                                item.timeRemain = {
                                    hours: 0,
                                    minutes: 0,
                                    seconds: 0,
                                }
                            } else {
                                item.timeRemain.hours --
                                item.timeRemain.minutes = 59
                            }
                        } else {
                            item.timeRemain.minutes --
                            item.timeRemain.seconds = 59
                        }
                    } else {
                        item.timeRemain.seconds --
                    }
                    return null;
                })
            }
        },
        profileCardOpenToggle: (state) => {
            state.profileCardOpen = !state.profileCardOpen;
        }
    },
})

export const { changeSearchValue, likeBid, unlike, bidsTimerStart, popularTimerStart, profileCardOpenToggle,  } = mainSlice.actions

export default mainSlice.reducer