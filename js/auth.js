const config = {
    apiKey: "AIzaSyBOi-Nxdo0LySOwr0zluJH36AebujgIPWA",
    authDomain: "fullfill-aeba1.firebaseapp.com",
    databaseURL: "https://fullfill-aeba1.firebaseio.com",
    projectId: "fullfill-aeba1",
    storageBucket: "fullfill-aeba1.appspot.com",
    messagingSenderId: "335821704690"
  };
  firebase.initializeApp(config);

  const txtEmail = document.getElementById('signUpEmail');
  const txtPassword = document.getElementById('signUpPassword');
  const logEmail = document.getElementById('loginEmail');
  const logPassword = document.getElementById('loginPassword');
  const btnSignup = document.getElementById('btnSignUp');
  const btnLogin = document.getElementById('btnLogin')
  const btnLogOut = document.getElementById('btnLogOut')

  //login
  btnLogin.addEventListener('click', e=>{
    const email = logEmail.value;
    const pass = logPassword.value;
    const auth = firebase.auth();

    //sign in
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
});

  //create user
  btnSignup.addEventListener('click', e=>{
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //sign in
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message))

});

//log out
 btnLogOut.addEventListener('click', e=>{
     firebase.auth().signOut();
 });

// add a real time listener
firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
        console.log(firebaseUser);
         btnLogOut.classList.remove('hidden');
    } else{
        console.log('not logged in');
         btnLogOut.classList.add('hidden');
    }
});
