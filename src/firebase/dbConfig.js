import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDSlo97FU1ZyTlr3mgfZltQFzcXs8pzsuA",
  authDomain: "cerveza-proyect-ef9b3.firebaseapp.com",
  projectId: "cerveza-proyect-ef9b3",
  storageBucket: "cerveza-proyect-ef9b3.appspot.com",
  messagingSenderId: "685897945096",
  appId: "1:685897945096:web:aa37ef60ed92db0b7641bd",
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
};
