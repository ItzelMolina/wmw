// Initialize Firebase
var config = {
  apiKey: "AIzaSyD6vzrDQUf54AC9ciacoec2U55LsRDOO9o",
  authDomain: "wmw1-e7633.firebaseapp.com",
  databaseURL: "https://wmw1-e7633.firebaseio.com",
  projectId: "wmw1-e7633",
  storageBucket: "wmw1-e7633.appspot.com",
  messagingSenderId: "134918050249"
};
firebase.initializeApp(config);

$('#google_account').click(function (){
  authGoogle();
});

function authGoogle(){
  var provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
  goToPage(provider);
}

function authentication(provider){
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}

function goToPage(provider) {
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
    window.location = "views/page.html";

  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
// // Sign Up
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });
//
// // Log In
// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });
//
// // Log Out
// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });

$(document).ready(function(){
  $('.slider').slider();
});
