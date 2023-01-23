import { auth } from './config';
import {
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    signInWithEmailAndPassword,
} from 'firebase/auth';

const state = {
    user: {},
    token: '',
};

//Para sacar la info de un login con email y password
export const loginWithPass = async (email, pass) => {
    const providerWithPass = new GoogleAuthProvider();
    let userCredentialsWithPass = await signInWithEmailAndPassword(
        auth,
        email,
        pass
    );
    console.log(userCredentialsWithPass);
    state.user.userName = userCredentialsWithPass.user.displayName;
    state.user.mail = userCredentialsWithPass.user.mail;
    state.user.uid = userCredentialsWithPass.user.uid;
    state.token = await userCredentialsWithPass.user.getIdTokenResult();
    console.log('state: ', state);
};

//Para sacar la info solo con el login de google
export const login = async () => {
    const provider = new GoogleAuthProvider();
    let userCredentials = await signInWithPopup(auth, provider);
    console.log(userCredentials);
    state.user.userName = userCredentials.user.displayName;
    state.user.mail = userCredentials.user.mail;
    state.user.uid = userCredentials.user.uid;
    state.token = await userCredentials.user.getIdTokenResult();
    console.log('state: ', state);
};

export const logout = () => {
    signOut(auth);
    state.user = {};
    console.log('state: ', state);
};
