interface Product
{
    name: string;
    price: number;
}

interface Address
{
    streetName: string;
    postCode: number;
    counry: string;
}

export class Order
{
    private _shippingPrice = 10;
    private _products: Array<Product> = {};
    private _address: Address;

    public addProduct(newProduct: Product)
    {
        this._products.push(newProduct);
    }

    public setAddress(address)
    {
        this._address = address;
    }

    private _calculatePrice()
    {
        const productsPrice = this._products.reduce( (acc, product) => {
            return acc + product.price;
        }, 0 );
    }

    public finalizeOrder(){
        console.log( 'Order summary' );
    }
}