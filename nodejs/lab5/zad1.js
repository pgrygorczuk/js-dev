const fs = require('fs');

//ENOENT = Error No Entity (byt nie istnieje)
try{
    const data = fs.readFileSync('user.json', 'utf-8');
    const user = JSON.parse(data);
    console.log(user.name);
} catch (error){
    console.log(error.message);
}
