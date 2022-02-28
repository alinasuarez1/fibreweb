import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//import seed file 
//import { seedDatabase } from '../seed';

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyCqCn-L5c_euzgNyeMPHH2n4q_Okk7VUmw",
    authDomain: "fibre-a24aa.firebaseapp.com",
    projectId: "fibre-a24aa",
    storageBucket: "fibre-a24aa.appspot.com",
    messagingSenderId: "1009245732253",
    appId: "1:1009245732253:web:d50dae57918c59b50dc374"
  };

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//call seed file once!
// seedDatabase(firebase);

export { firebase, FieldValue };