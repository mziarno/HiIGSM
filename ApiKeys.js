import * as firebase from 'firebase';

var config= {
    
    apiKey: "AIzaSyD5R2HX0e5Z0P9JAIi_jVMz8ZUE5jj-jfk",
    authDomain: "igsm-88697.firebaseapp.com",
    databaseURL: "https://igsm-88697.firebaseio.com",
    projectId: "igsm-88697",
    storageBucket: "igsm-88697.appspot.com",
    messagingSenderId: "618078582463",
  };

  var ApiKeys = firebase.initializeApp(config);
  export default ApiKeys;
  

