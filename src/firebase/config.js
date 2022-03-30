import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
 /* apiKey: "AIzaSyCThpQsGd_8rUwGd-t9qCmYN4x3e_uVbVs",
  authDomain: "vue-3-fb9.firebaseapp.com",
  projectId: "vue-3-fb9",
  storageBucket: "vue-3-fb9.appspot.com",
  messagingSenderId: "544877178259",
  appId: "1:544877178259:web:78d7ae682ca4ea36224c66"*/

  apiKey: "AIzaSyCDMlgynfzrlG4EmG3dw0HNNq3K4uHYu9U",
  authDomain: "soundscape-9e59f.firebaseapp.com",
  databaseURL: "https://soundscape-9e59f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "soundscape-9e59f",
  storageBucket: "soundscape-9e59f.appspot.com",
  messagingSenderId: "362681373195",
  appId: "1:362681373195:web:f9431ffe85a0ac5535ed0e"
}

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

export { db, auth }