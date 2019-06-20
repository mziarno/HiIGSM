import {Container} from "unstated";
import * as firebase from "firebase";
import {AsyncStorage} from 'react-native';

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
        try {
            const weekDaysData = await AsyncStorage.getItem('weekDaysArray');
            const messageData = await AsyncStorage.getItem('message');
            const notificationsData = await AsyncStorage.getItem('notificationsArray');

            if(weekDaysData)
                this.setState({
                    weekDaysArray: JSON.parse(weekDaysData),
                    message: JSON.parse(messageData),
                    notificationsArray: JSON.parse(notificationsData),
                });
            console.log("ASSSSSSSSSSSSSSSSSSSSSSSS")
        } catch (e) {
            console.log("BBZZZZZZZZZZZZZZZZZZZZZZZ");
            console.log(e)
        }
    };

    connectToFirebase = () => {
        firebase.database().ref('weekDaysNew').on('value', snap => {
                this.setState({
                    weekDaysArray: snap.val()
                });
            AsyncStorage.setItem('weekDaysArray', JSON.stringify(snap.val()), (e) => {console.log(e)} );
            }
        );

        firebase.database().ref('message').on('value', snap => {
                this.setState({
                    message: snap.val()
                });
            AsyncStorage.setItem('message', JSON.stringify(snap.val()));
            }
        );

        firebase.database().ref('notifications').on('value', snap => {
            this.setState({
                notificationsArray: snap.val()
            });
            AsyncStorage.setItem('notificationsArray', JSON.stringify(snap.val()));
        });

        firebase.database().ref('posters').on('value', snap => {
            this.setState({
                postersArray: snap.val()
            });
            AsyncStorage.setItem('postersArray', JSON.stringify(snap.val()));
        });

        firebase.database().ref('presentations').on('value', snap => {
            this.setState({
                presentationsArray: snap.val()
            });
            AsyncStorage.setItem('presentationsArray', JSON.stringify(snap.val()));
        })
    };
}