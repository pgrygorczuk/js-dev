/**
 * ADDITIONALLY
 * how can we make item type checking more TypeScript style - hence typos safe
 * (what is a typo? typing 'backgroung' instead of 'background')
 */
enum ItemTypes{
    FRUIT = 'fruit',
    VEGETABLE = 'vegetable',
}

interface Items{
    name: string;
    taste?: string;
    type?: ItemTypes;
}

var items: Array<Items> = [];
//var items: Array<> = [];
items.push({
    name: 'Apple',
    taste: 'sweet',
    type: ItemTypes.FRUIT
});
items.push({
    name: 'Lemon',
    taste: 'sour',
    type: ItemTypes.FRUIT
});
items.push({
    name: 'Potato',
    type: ItemTypes.VEGETABLE
});
items.push({
    name: 'Car'
});
function printFruitsAndVeggies(fruitsAndVeggies: Array<Items>)
{
    for (var _i: number = 0,
        fruitsAndVeggies_1 = fruitsAndVeggies;
        _i < fruitsAndVeggies_1.length; _i++)
    {
        var item: Items = fruitsAndVeggies_1[_i];
        if (item.type === ItemTypes.FRUIT) {
            console.log("We have a fruit: " + item.taste + " " + item.name);
        }
        else if (item.type === ItemTypes.VEGETABLE) {
            console.log('We have a vegetable: ' + item.name);
        }
        else {
            console.log('--- Error ---');
            console.log('We have an item of unknown type: ' + item.name);
            console.log('--- End of error ---');
        }
    }
}
printFruitsAndVeggies(items);
