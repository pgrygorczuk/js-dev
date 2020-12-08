/**
 * The goal here is to:
 * - make it in 'Object Oriented' manner (use classes)
 * - use types
 * - split code into modules (files)
 */
/**
 * Create list of products
 */
var products = [];
var product1 = {
    name: "Bread",
    price: 1
};
var product2 = {
    name: "Milk",
    price: 2
};
products.push(product1);
products.push(product2);
/**
 * Create address
 */
var address = {
    streetName: "Saturna",
    postCode: 1222,
    country: "Poland"
};
/**
 * Calculate total price
 */
var productsPrice = products.reduce(function (acc, product) {
    return acc + product.price;
}, 0);
var shippingPrice = 10;
var totalPrice = productsPrice + shippingPrice;
var order = {
    products: products,
    address: address,
    totalPrice: totalPrice
};
/**
 * Making order
 */
console.log("----------------Order summary-------------");
console.log("Shipping address:", order.address);
console.log("Products list:", order.products);
console.log("Total order price: " + order.totalPrice);
