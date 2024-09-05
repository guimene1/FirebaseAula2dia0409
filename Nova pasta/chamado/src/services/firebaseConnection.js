import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBH4cB6RZjjdyHfVoz0a7WSn0EWzkv0y_Y",
  authDomain: "ticketsb-a45f6.firebaseapp.com",
  projectId: "ticketsb-a45f6",
  storageBucket: "ticketsb-a45f6.appspot.com",
  messagingSenderId: "526195632849",
  appId: "1:526195632849:web:c590325cb896eb662e33f0"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };