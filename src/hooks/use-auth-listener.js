//listens if user logged in or logged out 
import {useState, useEffect, useContext} from 'react';
import FirebaseContext from '../context/firebase';

export default function useAuthListener(){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const {firebase} = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            // we have a user... therefore we can store the user in local storage
            if (authUser){
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else {
                // if not clean out local storage and set user to null 
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });

        return () => listener();
    }, [firebase]);
    return {user}
}