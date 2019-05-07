const functions = require('firebase-functions');
const fetch = require('node-fetch');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = functions.database.ref('notifications/{id}').onCreate((change, context) => {

    console.log("DZIAŁA!");

    const root = admin.database().ref();
    const messages = [];

    //return the main promise
    return root.child('/usersTokens').once('value').then(function (snapshot) {

        snapshot.forEach(function (childSnapshot) {

            const expoToken = childSnapshot.val();

            if (expoToken) {
                messages.push({
                    "to": expoToken,
                    "body": "New notification about IGSM!"
                })
            }
        });
        return Promise.all(messages)
    }).then(messages => {

        fetch('https://exp.host/--/api/v2/push/send', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messages)
        })
    })
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
