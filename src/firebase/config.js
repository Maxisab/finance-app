import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCocCkHZ1VhhfBjKGd_gp1MgtPoEO1c5x0",
  authDomain: "financetracker-5a08c.firebaseapp.com",
  projectId: "financetracker-5a08c",
  storageBucket: "financetracker-5a08c.appspot.com",
  messagingSenderId: "389987045310",
  appId: "1:389987045310:web:5d98c70debbf86813ff3ef"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()

export { projectFirestore }