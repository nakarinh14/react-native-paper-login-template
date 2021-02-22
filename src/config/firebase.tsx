import * as firebase from 'firebase'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDIRnmfnWDaUk8Y8EEQZIFh5n9KPguRZaE",
  authDomain: "rapid-frontend-project-2.firebaseapp.com",
  projectId: "rapid-frontend-project-2",
  storageBucket: "rapid-frontend-project-2.appspot.com",
  messagingSenderId: "965609133252",
  appId: "1:965609133252:web:78246c65a6e4b21d6f6591"
};

firebase.initializeApp(firebaseConfig)

export { firebase }