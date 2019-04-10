import {Container} from "unstated";
import * as firebase from "firebase";

require("firebase/database");

export class FirebaseContainer extends Container {
    state = {
        count: 0,
        weekDaysArray: [],
    };

    constructor() {
        super();
        this.connectToFirebase();
    }


    //============================================
    connectToFirebase = () => {
        const weekDaysReference = firebase.database().ref('weekDaysNew');
        weekDaysReference.on('value', snap => {
                this.setState({
                    weekDaysArray: snap.val()
                })
            }
        );
    };

    increment = () => {
        this.setState({count: this.state.count + 1});
    };
}