import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCyjkC5aSEqBx5Kt57oXhX1Aa-iCKK3O9Y",
    authDomain: "rotaract-2022-42d17.firebaseapp.com",
    projectId: "rotaract-2022-42d17",
    storageBucket: "rotaract-2022-42d17.appspot.com",
    messagingSenderId: "182752550910",
    appId: "1:182752550910:web:7c1cc875644956d01ceaaf",
    measurementId: "G-J5S2B9Q6KR"
  };
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  export default storage;
    