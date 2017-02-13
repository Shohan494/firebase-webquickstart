(function(){
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCR_sf4aD7sbzjOliQnxq8QG3t1_DUe_WE",
    authDomain: "web-quickstart-72eec.firebaseapp.com",
    databaseURL: "https://web-quickstart-72eec.firebaseio.com",
    storageBucket: "web-quickstart-72eec.appspot.com",
    messagingSenderId: "898337575154"
  };
  firebase.initializeApp(config);

  //getting the elements
  const auth = firebase.auth();
  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignup = document.getElementById("btnSignup");
  const btnLogout = document.getElementById("btnLogout");

  //login event handling
  btnLogin.addEventListener("click", e =>{
    const email = txtEmail.value;
    const pass = txtPassword.value;

    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
  });

  //Signup event handling
  btnSignup.addEventListener("click", e =>{
    // check for real email
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));

  });

  btnLogout.addEventListener("click", e =>{
    auth.signOut();
  });

  auth.onAuthStateChanged(firebaseUser => {
    if(firebaseUser)
    {
      console.log(firebaseUser);
      btnLogout.classList.remove("hide");
    }
    else {
      console.log("Not Logged In");
      btnLogout.classList.add("hide");
    }
});

}() );
