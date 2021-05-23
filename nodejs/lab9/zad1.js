// __dirname - current directory

//npm install dotenv
//npm install mongodb

// Zmienne srodowiskowe.
require('dotenv').config();

// Wszystkie dane pobrane z pliku sa stringami.
// Dla obiektu trzeba zrobic JSON.parse( zmienna ).
console.log( process.env.port );

// Interfejs graficzny:
// - Robo 3T
// - Mongo Compass
