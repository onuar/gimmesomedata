# gimmesomedata
A dumb data (training data) creator on Firebase for imaginary real estate application.

# installation
* git clone ...
* npm install
* create ./src/firebase/Config.ts
* add Firebase authentication info example:

    `export const config = {
        apiKey: "XXX_API_KEY",
        authDomain: "xxx.firebaseapp.com",
        databaseURL: "https://xxx.firebaseio.com",
        projectId: "xxx",
        storageBucket: "xxx.appspot.com",
        messagingSenderId: "yyy"
    };`
* npm start