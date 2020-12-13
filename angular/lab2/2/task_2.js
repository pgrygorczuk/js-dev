//let product = {};
var product = {
    name: 'bread',
    price: 1
};
// product.name = 'bread';
// product.price = 1;
function presentProduct(product) {
    console.log('We have a ' + product.name + ' which costs ' + product.price);
}
presentProduct(product);
