//console.log("Loggerin loading....");
const Connect = window.uportconnect.Connect;
const appName = 'uPort OST Integration';
const connect = new Connect(appName, {network: 'rinkeby', }); 
const web3 = connect.getWeb3();


let $ = (selector) => document.querySelector(selector)
      const globalState = {
        uportId: "",
        ethAddress: "",
        ethBalance: "",
        currentStatus: "",
        statusInput: "",
        txHashSentEth: "",
        txHashSetStatus: "",
        sendToAddr: "",
        sendToVal: ""
      }

// uPort connect
let uportConnect = function () {

  web3.eth.getCoinbase((error, address) => {
    if (error) { throw error }
    globalState.ethAddress = address

    // This one is for display purposes - MNID encoding includes network
    globalState.uportId = window.uportconnect.MNID.encode({network: '0x4', address: address});
    
    console.log("uport id = " + globalState.uportId);
    
    //get credentials from uport signer:
    connect.requestCredentials({
        requested: ['name', 'phone', 'country'],
        notifications: true // We want this if we want to recieve credentials
      })
      .then((credentials) => {
        // Do something
        console.log("got some creds: " + credentials);
      })
  })
}


let login = function() {
  //console.log("Log in button clicked. Oh boy, let's get cooking!");
  uportConnect(); 
}
//console.log("loggerin loaded");



