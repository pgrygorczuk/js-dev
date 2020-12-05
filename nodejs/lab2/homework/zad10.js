// 10. Modyfikacja zadanie 9 tak aby zapisać nasze przywitanie do pliku używając funkcji writeFile.

const os = require('os');
const fs = require('fs');
const userName = os.userInfo().username;

setTimeout( () => {
    console.log( `Welcome ${userName}` );
}, 5000 );

fs.writeFile('zad.10.txt', `Welcome ${userName}`, (err) => {
    if (err) throw err;
    console.log('File has been saved.');
});

