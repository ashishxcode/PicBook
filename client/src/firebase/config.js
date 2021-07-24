
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {

	apiKey: "AIzaSyCfmQYjkCoA6D5HgcGyFKCECi7q13C0F4k",
	authDomain: "picbook-ad888.firebaseapp.com",
	projectId: "picbook-ad888",
	storageBucket: "picbook-ad888.appspot.com",
	messagingSenderId: "393588963750",
	appId: "1:393588963750:web:5b730cd0aa40d3775ef767",
	measurementId: "G-QFTMJYB29X",

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

//intitliaseing services
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
	projectStorage,
	projectFirestore,
	timestamp,
	auth,
	googleAuthProvider,
};
