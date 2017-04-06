import * as firebase from 'firebase';
import { config } from './Config';

export const firebaseRef = firebase.initializeApp(config);