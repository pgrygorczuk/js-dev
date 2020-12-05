// 9. Stworzenie aplikacji, która wyświetli na ekranie przywitanie użytkownika aktualnie zalogowanego na komputerze po 5 sekundach od uruchomienia aplikacji.
// Do wykorzystania moduł os, funkcja userInfo(), oraz funkcja setTimeout().

const os = require('os');
const userName = os.userInfo().username;

setTimeout( () => {
    console.log( `Welcome ${userName}` );
}, 5000 );
