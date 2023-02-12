import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, where } from 'firebase/firestore';

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

export async function getAmbassadorTable() {
    const querySnapshot = await getDocs(collection(db, 'ambassador'));
    return querySnapshot.docs.map(doc => doc.data());
}

export async function getPaymentsWhere(id) {
    return await getPayments().then((data) => {
        return data.filter((item) => id == 0 || item.embassador === id)
    });
}

export async function getPayments() {
    const querySnapshot = await getDocs(collection(db, 'payments'));
    return querySnapshot.docs.map(doc => doc.data());
}
