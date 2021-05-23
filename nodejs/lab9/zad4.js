require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_CONNECTION;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(async err => {

    // Jezeli nie ma kolekcji, zostanie stworzona.
    // Dobra praktyka jest przechowywanie nazwy kolekcji w .env, zeby uniknac pomylek.
    const collectionUsers = client.db("mydatabase").collection("users");

    let addResult = await collectionUsers.insertMany([
        // MongoDB przyjmie wszystkie dane, uwaga na rozne obiekty.
        { firstname: "my first name", wasActive: 0 },
        { lastName: "my first name"},
        { firstname: "my user first name", wasActive: true },
    ]);

    let findResult = await collectionUsers.find().toArray();
    console.table( findResult );

    // Usuwanie: deleteOne, deleteMany.
    let deleteResult = await collectionUsers.deleteOne(); // Usunie pierwszy obiekt.
    // Jezeli podamy kryterium, ktore spelnia wiele obiektow, i tak zostanie usuniety tylko jeden.
    deleteResult = await collectionUsers.deleteOne({ wasActive: 0 });
    // Usuniecie wszystkich obiektow, ktore spelniaja dane kryterium.
    deleteResult = await collectionUsers.deleteMany({ wasActive: 0 });
    console.log( deleteResult );

    // Edycja: podajemy filtr i reguly aktualizacji.
    // Jezeli podamy pole, ktore nie istnieje, zostanie dodane!
    let updateResult = await collectionUsers.updateMany(
        {}, // Kryterium wyszukiwania
        { $set: {lastname: "Kowalski"} }
    );
    console.log( updateResult );

    // Przyklady.
    addResult = await collectionUsers.insertOne({
        firstName: "Jan",
        lastName: "Kowalski",
        isActive: true,
        age: 40,
        children: [
            {
                firstName: "Ania",
                lastName: "Kowalska",
                age: 10,
            },
            {
                firstName: "Kasia",
                lastName: "Kowalska",
                age: 11
            }
        ],
        phoneNumbers: [1981891891, 4949191616],
    });
    
    client.close();
});

