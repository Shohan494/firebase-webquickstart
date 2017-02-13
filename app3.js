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
  const btnLogin = document.getElementById("btnLogin");
  const btnLogout = document.getElementById("btnLogout");

  //login event handling/click event listener
  btnLogin.addEventListener("click", e =>{
    auth.signInAnonymously();
    });

    //login event handling/click event listener
    btnLogout.addEventListener("click", e =>{
      auth.signOut();
      });

  auth.onAuthStateChanged(firebaseUser => {
    console.log(firebaseUser)
    if(firebaseUser)
    {
      btnLogout.classList.remove("hide");
    }
    else {
      console.log("Not Logged In");
      btnLogout.classList.add("hide")
    }
  });

  btnLogout.addEventListener("click", e =>{
    auth.signOut();
});

}() );
