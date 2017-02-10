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
  const ulList = document.getElementById("list");

  //creating references, ref() means the databases object's root
  const dbRefObject = firebase.database().ref().child("object");
  //creating reference for list
  //from dbRefObject then the "child()"
  const dbRefList = dbRefObject.child("hobby");

  //val() returns entire object
  //to console show out
  //dbRefObject.on( 'value', snap => console.log(snap.val()) );
  //in regular html
  dbRefObject.on('value', snap => preObject.innerText = JSON.stringify( snap.val(), null, 3 ));
  // for printing the added/existed list
  //dbRefList.on('child_added', snap => console.log(snap.val()) );

  //for showing them in lists in html
  dbRefList.on('child_added', snap => {
    const li = document.createElement("li");
    li.innerText = snap.val();
    //adding id to each of the list
    li.id = snap.key
    ulList.appendChild(li)
  });

  //for editing the list
  dbRefList.on('child_changed', snap => {
    const liChanged = document.getElementById(snap.key)
    liChanged.innerText = snap.val();
  });

  //for removing the list
  dbRefList.on('child_removed', snap => {
    const liToRemove = document.getElementById(snap.key)
    liToRemove.remove();
  });




}() );
