import {Container} from "unstated";
import * as firebase from "firebase";

require("firebase/database");

export class FirebaseContainer extends Container {
    state = {
        weekDaysArray: [],
        message: "",
        notificationsArray: []
    };

    constructor() {
        super();
        this.connectToFirebase();
    }


    //============================================
    connectToFirebase = () => {
        firebase.database().ref('weekDaysNew').on('value', snap => {
                this.setState({
                    weekDaysArray: snap.val()
                })
            }
        );

        firebase.database().ref('message').on('value', snap => {
                this.setState({
                    message: snap.val()
                })
            }
        );

        firebase.database().ref('notifications').on('value', snap =>{
            this.setState({
                notificationsArray: snap.val()
            })
        })

    };

}