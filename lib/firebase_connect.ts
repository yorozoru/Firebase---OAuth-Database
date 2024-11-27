import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCfeWktEDpbNeX1xuKtzcW5N06eaUPPxBc",
  authDomain: "show-tell-19ee7.firebaseapp.com",
  projectId: "show-tell-19ee7",
  storageBucket: "show-tell-19ee7.firebasestorage.app",
  messagingSenderId: "106917506342",
  appId: "1:106917506342:web:00e7b891a2d416aace65e7",
  databaseUrl: "https://show-tell-19ee7-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);

export default app;