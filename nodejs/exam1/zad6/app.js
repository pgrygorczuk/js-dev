const load = require('./load.js');
const add  = require('./add.js');
const del  = require('./del.js');

const { argv } = require('yargs')
.usage("Użycie: $0 [dodaj|lista|usun] args")
.example('node app.js dodaj "Napisac program na zaliczenie z NodeJS"')
.command('dodaj <zadanie>', 'Dodaje nowe zadanie.', (yargs) => {
    yargs.positional('zadanie', {
        describe: 'Treść wpisu do dziennika.',
    });
},
    (argv) => {
        add.add( argv.zadanie );
    }
)
.command('lista', 'Wyświetla listę wszystkich wpisów.', (yargs) => {}, (argv) => {
    load.load().then((data) => {
        data.forEach((value, index) => {
            console.log(`${index+1}. ${value}`);
        });
    });
})
.command('usun <id>', 'Usuwa wpis o podanym <id>.', (yargs) => {
    yargs.positional('id', {
        describe: 'Identyfikator zadania do usunięcia.',
    });
}, (argv) => {
    del.del(argv.id);
})
.demandCommand(1, "Podaj jedno z poleceń: 'dodaj', 'lista', 'usun'")
.version("1.0")
.help()
.argv;
