import * as React from 'react';


function SearchBar(props)
{
    function handleInputChange(e){
        props.setSearch( e.target.value );
    }

    function handleCheckboxChange(e){
        props.setStockOnly( e.target.checked );
    }

    return (
        <div className="search-bar-container">
            <input
                className="search-bar-text-input"
                placeholder="Search"
                onChange={handleInputChange}
                value={props.inputValue}
            />
            <label htmlFor="stocked" className="checkbox-label">
                <input
                    id="stocked"
                    name="stocked"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={props.checkboxValue} />
                Only show product in stock
            </label>
        </div>
    );
}

function ProductCategoryRow({category})
{
    return (
        <tr>
            <th colSpan="2">{category}</th>
        </tr>
    );
}

function ProductRow({product})
{
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

function ProductTable({products=[], stockOnly=false, search=''})
{
    const rows = products.reduce( (acc, item, index, array) => {
        //If we found new category, display category row.
        if( item.category !== (array[index-1] && array[index-1].category) )
        {
            acc.push(
                <ProductCategoryRow category={item.category} key={item.category} />
            );
        }
        //Filter products by search text and stocked.
        if( (item.stocked || !stockOnly) &&
            (!search || item.name.toUpperCase().includes(search.toUpperCase()) ) ){
            //Add product row for each product.
            acc.push(
                <ProductRow product={item} key={item.name} />
            );
        }
        return acc;
    //Acc is an empty array by default.
    }, [] );

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

function FilterableProductTable({products})
{
    const [search, setSearch] = React.useState('');
    const [stockOnly, setStockOnly] = React.useState( false );

    return (
        <div>
            <SearchBar
                setSearch={setSearch}
                setStockOnly={setStockOnly}
                inputValue={search}
                checkboxValue={stockOnly} />
            <ProductTable
                products={products}
                search={search}
                stockOnly={stockOnly} />
        </div>
    );
}

const App = (props) => {
    //console.log(props);
    return (
        <React.Fragment>
            <h1>Stock</h1>
            <FilterableProductTable products={props.data}   />
        </React.Fragment>
    );
}

export default App;
