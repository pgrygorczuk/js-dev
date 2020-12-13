/**
 * The goal here is to:
 * - make it in 'Object Oriented' manner (use classes)
 * - use types
 * - split code into modules (files)
 */

import { Order } from "./Order";

/**
 * Create list of products
 */

interface ShoppingListItem{
    name: string,
    amount: number,
}

class ShoppingList{
    private _items: Array<ShoppingListItem> = [];

    public addItem(item: ShoppingListItem){
        this._items.push( item );
    }

    public printList(){
        let total = 0;
        for( const item of this._items ){
            console.log(item.name + ' x ' + item.amount );
        }
    }
}

let list = new ShoppingList();

//TODO: podzielic na pliki
const newOrder = new Order();

newOrder.addProduct({
    name: "Bread",
    price: 1,
});
newOrder.addProduct({
    name: "Milk",
    price: 2,
});
newOrder.setAddress({
    streetName: "Saturna",
    postCode: 12222,
    country: "Poland",
});
newOrder.finalizeOrder();
