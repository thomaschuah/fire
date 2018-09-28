import firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyC1eW9xUorJPqBT3d3QyCd4Y5kuaqc60iI",
  authDomain: "fun-food-friends-77167.firebaseapp.com",
  databaseURL: "https://fun-food-friends-77167.firebaseio.com",
  projectId: "fun-food-friends-77167",
  storageBucket: "fun-food-friends-77167.appspot.com",
  messagingSenderId: "529223712826"
};
firebase.initializeApp(config);
export default firebase;