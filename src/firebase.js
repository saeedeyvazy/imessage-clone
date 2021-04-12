import firebase from 'firebase'

const firebaseConfig = {
	apiKey: 'AIzaSyAzYba4BeMux1JV-Li_Xm08VVYzHngXXY0',
	authDomain: 'tinder-clone-a1b60.firebaseapp.com',
	projectId: 'tinder-clone-a1b60',
	storageBucket: 'tinder-clone-a1b60.appspot.com',
	messagingSenderId: '379605529237',
	appId: '1:379605529237:web:2f382c5cf46c060e81619c',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export { auth, provider }

export default db
