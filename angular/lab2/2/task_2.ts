interface Product{
    name: string;
    price: number;
}

//let product = {};
let product: Product = {
    name: 'bread',
    price: 1,
};
// product.name = 'bread';
// product.price = 1;


function presentProduct(product: Product) {
    console.log('We have a ' + product.name + ' which costs ' + product.price)
}

presentProduct(product);
