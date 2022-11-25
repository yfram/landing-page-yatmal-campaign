import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBCgvd8Ee5dwxyAhnGOp8AAFIblh-MXmy0",
    authDomain: "fundraiser-8a75b.firebaseapp.com",
    databaseURL: "https://fundraiser-8a75b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fundraiser-8a75b",
    storageBucket: "fundraiser-8a75b.appspot.com",
    messagingSenderId: "119654479091",
    appId: "1:119654479091:web:332282441ced4a2bc03386",
    measurementId: "G-XEDH3F8NQG"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
export default async function getPayments() {
    const citiesCol = collection(db, 'payments');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}
