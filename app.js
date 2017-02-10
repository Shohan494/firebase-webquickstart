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

  const preObject = document.getElementById("object");
  //creating references, ref() means the databases root
  const dbRefObject = firebase.database().ref().child("object");
  //val() returns entire object
  //to console show out
  //dbRefObject.on( 'value', snap => console.log(snap.val()) );
  //in regular html
  dbRefObject.on('value', snap => preObject.innerText = JSON.stringify( snap.val(), null, 3 ));


}() );
