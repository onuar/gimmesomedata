import * as faker from 'faker';
import { Boss } from "../models/Boss";
import { firebaseRef } from '../firebase/FirebaseRef';
var randomLatitude = require('random-latitude');
var randomLongitude = require('random-longitude');

faker.locale = "tr";
var db = firebaseRef.database();

for (var index = 0; index < 100; index++) {
    var lat = randomLatitude({ min: 41.762954, max: 37.193333 })
    var long = randomLongitude({ min: 26.369794, max: 44.710539 });

    let boss = new Boss(index,faker.name.firstName(),faker.lorem.paragraph(),lat,long);
    db.ref('bosses/' + index.toString()).set(
        { boss }
    );
    console.log(boss);
}