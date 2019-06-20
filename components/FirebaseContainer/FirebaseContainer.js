import {Container} from "unstated";
import * as firebase from "firebase";
import * as SecureStore from "expo-secure-store";

require("firebase/database");

export class FirebaseContainer extends Container {
    state = {
        weekDaysArray: [],
        message: "",
        notificationsArray: [],
        presentationsArray: [],
        postersArray: []
    };

    constructor() {
        super();
        // this.checkFirebaseConnection();
        this.loadLocalDataCopy();
        this.connectToFirebase();
        // this.storeData;
    }

    //============================================
    loadLocalDataCopy = async () => {
        const weekDaysData = await SecureStore.getItemAsync('weekDaysArray');
        const messageData = await SecureStore.getItemAsync('message');
        const notificationsData = await SecureStore.getItemAsync('notificationsArray');

        if(weekDaysData)
            this.setState({
                weekDaysArray: JSON.parse(weekDaysData),
                message: JSON.parse(messageData),
                notificationsArray: JSON.parse(notificationsData),
            });
    };

    connectToFirebase = () => {
        firebase.database().ref('weekDaysNew').on('value', snap => {
                this.setState({
                    weekDaysArray: snap.val()
                });
                SecureStore.setItemAsync('weekDaysArray', JSON.stringify(snap.val()));
            }
        );

        firebase.database().ref('message').on('value', snap => {
                this.setState({
                    message: snap.val()
                });
                SecureStore.setItemAsync('message', JSON.stringify(snap.val()));
            }
        );

        firebase.database().ref('notifications').on('value', snap => {
            this.setState({
                notificationsArray: snap.val()
            });
            SecureStore.setItemAsync('notificationsArray', JSON.stringify(snap.val()));
        });

        firebase.database().ref('posters').on('value', snap => {
            this.setState({
                postersArray: snap.val()
            });
            SecureStore.setItemAsync('postersArray', JSON.stringify(snap.val()));
        });

        firebase.database().ref('presentations').on('value', snap => {
            this.setState({
                presentationsArray: snap.val()
            });
            SecureStore.setItemAsync('presentationsArray', JSON.stringify(snap.val()));
        })
    };
}