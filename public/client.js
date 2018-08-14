// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var globalUser = {
  "@context":"http://schema.org",
  "@type":"Person",
  "name":"",
  "address":"",
  "avatar": {},
  "country": "",
  "network":"rinkeby",
  "publicEncKey": "",
  "publicKey":"",
  "OST":{}
}

// When the user clicks the button, open the modal 
btn.onclick = function(e) {
    e.preventDefault();
    //document.getElementById('myModal').style.display = "block";
    
    globalUser = {
  "@context":"http://schema.org",
  "@type":"Person",
  "name":"Joseph Schiarizzi",
  "address":"23fga3r2hh87ddhq98dhas8dz101j9f449w0",
  "avatar": {
    "url": "https://cdn.glitch.com/4fe48ebd-1c0b-4e10-a89e-8c8bb0273891%2Fme-icon.jpg?1533841427643"
  },
  "country": "US",
  "network":"rinkeby",
  "publicKey":"0xe4b420F15d6d878dCD0Df7120Ac0fc1509ee9Cab",
  "OST":{
    "IVNT":{
      "name" : "OST Token - IVNT",
      "userID":"26f04967-5fb7-47f6-a996-b62ea206483e"
    }
  }
};
  
    login();
    console.log('');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//=========================uport model
