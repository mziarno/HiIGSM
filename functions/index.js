const functions = require('firebase-functions');
const fetch = require('node-fetch');
var pako = require('pako');


const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = functions.database.ref('notifications/{id}').onCreate((change, context) => {

    console.log("DZIAŁA!");
    console.log(change.val().content);

    const root = admin.database().ref();
    const messages = [];

    //return the main promise
    return root.child('/usersTokens').once('value').then(function (snapshot) {

        snapshot.forEach(function (childSnapshot) {

            const expoToken = childSnapshot.val();

            if (expoToken) {
                messages.push({
                    "to": expoToken,
                    "body": change.val().content
                })
            }
        });
        return Promise.all(messages)
    }).then(messages => {
        const groupSize = 50;

        for(i = 0; i < messages.length / groupSize; i++) {
            fetch('https://exp.host/--/api/v2/push/send', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "host": "exp.host",
                "accept-encoding": "gzip, deflate",
            },
            body: JSON.stringify(messages.slice(i*groupSize, i*groupSize+groupSize))

            }).then(
                (val) => (console.log(val)),
                (reason) => (console.log("BBB" + reason))
            )
            }

    })
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
