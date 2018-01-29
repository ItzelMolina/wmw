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

  // Elementos
  const userName = document.getElementById('first_name');
  const userEmail = document.getElementById('first_name');
  const userPassword = document.getElementById('password');
  const btncreateAcount = document.getElementById('create_acount');
  const btnlogIn = document.getElementById('log_in');

  // Evento Login
  btnlogIn.addEventListener('click', e => {
    // Obtener e-mail y password
    const email = userEmail.value;
    const pass = userPassword.value;
    const auth = firebase.auth();
    // Sign In
    const promise = auth.signWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  // Evento Signup
  btncreateAcount.addEventListener('click', e => {
    // Obtener e-mail y password
    const email = userEmail.value;
    const pass = userPassword.value;
    const auth = firebase.auth();
    // Sign In
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

$(document).ready(function(){
  $('.slider').slider();
});
