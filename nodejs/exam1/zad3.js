const fs = require('fs');

fs.stat( process.argv[1], (err, stats) => {
    if(err){
        console.log(err);
    }else{
        console.log('Czas utworzenia  : ' + new Date(stats.birthtime));
        console.log('Czas modyfikacji : ' + new Date(stats.mtimeMs));
        console.log('Rozmiar w Bajtach: ' + stats.size);
    }
});
