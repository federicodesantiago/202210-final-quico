import { Repository } from '../../types/userRepo';
import { UserStructure } from '../../types/user';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase';

export class UserRepo implements Repository<UserStructure> {
    constructor(
        private url = 'https://stop-y-go-default-rtdb.europe-west1.firebasedatabase.app/places.json/'
    ) {
        //
    }

    state = {
        uid: '',
        photoURL: '',
        name: '',
        token: '',
    };
    async login(): Promise<UserStructure> {
        const provider = new GoogleAuthProvider();
        const userCredentials = await signInWithPopup(auth, provider);
        this.state.name = userCredentials.user.displayName as string;
        this.state.photoURL = userCredentials.user.photoURL as string;
        this.state.uid = userCredentials.user.uid;
        this.state.token = await userCredentials.user.getIdToken();
        const setStorageUser = (storeName: string, data: string): void => {
            localStorage.setItem(storeName, JSON.stringify(data));
        };
        setStorageUser('userStore', this.state.uid);
        window.location.reload();
        return this.state;
    }

    async logout(): Promise<UserStructure> {
        signOut(auth);
        this.state.name = '';
        this.state.photoURL = '';
        this.state.uid = '';
        this.state.token = '';
        delete localStorage.userStore;
        window.location.reload();
        return this.state;
    }
}
