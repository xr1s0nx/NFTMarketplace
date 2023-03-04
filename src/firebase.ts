import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyA5SVAGs6dNIHQ7qy0bda0gH7GVdt_yNYY",

    authDomain: "nft-marketplace-b4062.firebaseapp.com",

    projectId: "nft-marketplace-b4062",

    storageBucket: "nft-marketplace-b4062.appspot.com",

    messagingSenderId: "1029290247450",

    appId: "1:1029290247450:web:c939e6b7d3a451628218a3"

};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);