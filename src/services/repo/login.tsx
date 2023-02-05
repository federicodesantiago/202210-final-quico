import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const state = {
    user: {
        uid: '',
        photoURL: '',
        name: '',
    },
    token: '',
};

export const login = async () => {
    const provider = new GoogleAuthProvider();
    const userCredentials = await signInWithPopup(auth, provider);
    // state.user.userName = userCredentials.user.displayName;
    // state.user.mail = userCredentials.user.mail;
    state.user.uid = userCredentials.user.uid;
    state.token = await userCredentials.user.getIdToken();
    console.log('state: ', state);
};
