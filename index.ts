import * as faker from 'faker';
import { Person } from './src/models/Person';
import { Address } from './src/models/Address';

faker.locale = 'tr';

for (var i = 0; i < 100; i++) {
    var fullName = faker.name.findName();
    let person = new Person(i, fullName);

    console.log(person);
    var addressCount = faker.random.number(1, 5);
    for (var k = 0; k < addressCount; k++) {
        var country = faker.address.country();
        let address = new Address(faker.random.number(), i, country);
        console.log(address);
    }
}