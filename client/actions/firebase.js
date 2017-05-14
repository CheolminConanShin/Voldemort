import * as firebase from 'firebase';

const config = {
    apiKey: " AIzaSyABDTNF-H6QpEX_qY2W1a_D1UwHy9WgX00",
    databaseURL: "https://voldemort-card.firebaseio.com/"
};

class FirebaseConnector {
    constructor(){
        if(! FirebaseConnector.instance){
            const reference = firebase
                .initializeApp(config)
                .database();
            FirebaseConnector.instance = reference
        }

        return FirebaseConnector.instance
    }
}

const instance = new FirebaseConnector();
Object.freeze(instance);

export default instance;