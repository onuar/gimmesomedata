import * as faker from 'faker';
import { Person } from './src/models/Person';
import { Address } from './src/models/Address';
import { firebaseRef } from './src/firebase/FirebaseRef';

faker.locale = 'tr';

for (var i = 1; i <= 1000; i++) {
    let fullName = faker.name.findName();
    let person = new Person(i, fullName);

    var db = firebaseRef.database();
    db.ref('people/' + i.toString()).set(
        { person }
    );
    console.log(person);

    var addressCount = Math.floor(Math.random() * 5) + 1;
    for (var k = 0; k < addressCount; k++) {
        let country = faker.address.country();
        let addressId = faker.random.number();
        let address = new Address(addressId, i, country);

        db.ref('addresses/' + addressId).set({
            address
        });
        console.log(address);
    }

    console.log('---');
}