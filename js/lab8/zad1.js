const map = [
    ['34', '21', '32', '41', '25'],
    ['14', '42', '43', '14', '31'],
    ['54', '45', '52', '42', '23'],
    ['33', '15', '51', '31', '35'],
    ['21', '52', '33', '13', '23'],
];

function next(_x = 0, _y = 0){
    let [x, y] = map[_x][_y].split('');
    x = +x - 1;
    y = +y - 1;
    console.log(`[${_x+1}, ${_y+1}] -> [${x+1}, ${y+1}]`);
    if(x === _x && y === _y){
        console.log('Treasure found at ' + (x+1) + ', ' + (y+1) + ' !');
        return [x, y];
    }
    return next(x, y);
}

next();
