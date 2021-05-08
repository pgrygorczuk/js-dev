'use strict';

const game_ = require('./GameOfLife.js');


const game = new game_.GameOfLife(20, 20);
for(let i=0; i<10; ++i){
    game.tick();
}

