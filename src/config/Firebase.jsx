import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBdS4Oos6XW4e1WM_NbVnpKUjhRv3luD9I",
    authDomain: "soundy-web-react.firebaseapp.com",
    projectId: "soundy-web-react",
    storageBucket: "soundy-web-react.appspot.com",
    messagingSenderId: "973706582705",
    appId: "1:973706582705:web:83900b2a1edee167276090",
    measurementId: "G-VV1EDH7S5Z"
  };
const app = initializeApp(firebaseConfig);


export default app;