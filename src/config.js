import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDYCJpekl4sfHWcVbzljd2KHCrPESOyDm0',
    //apiKey: process.env.REACT_APP_API_KEY,
    // https://create-react-app.dev/docs/adding-custom-environment-variables/
    authDomain: 'stop-y-go.firebaseapp.com',
    projectId: 'stop-y-go',
    storageBucket: 'stop-y-go.appspot.com',
    messagingSenderId: '1029358742606',
    appId: '1:1029358742606:web:16259a867f2e053480271f',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
