class Transaction
{
    constructor(index, _id, cost, details)
    {
        let ddate    = details.date.split('-');
        this.index   = index;
        this._id     = _id;
        this.cost    = Number.parseFloat(cost);
        this.details = {
            type    : details.Type,
            company : details.company,
            date    : new Date( ddate[2], ddate[1], ddate[0] ),
        };
    }
}

class Data
{
    constructor()
    {
        this.data = this.readData();
    }
    readData( jsonFile = "./Data.json" )
    {
        let data = require( jsonFile );
        return data.map( function(item, index, array){
            return new Transaction(item.index, item._id, item.cost, item.detailsOfPayent);
        } );
    }
    totalMoney( year )
    {
        let total = 0.0;
        this.data.forEach( item => {
            if( item.details.date.getFullYear() == year )
                total += item.cost;
        });
        return total;
    }
    getMoneyBy( fieldCallback )
    {
        let results = {}, index;
        this.data.forEach( item => {
            index = fieldCallback( item );
            if( !results[index] )
                results[index] = 0.0;
            results[index] += item.cost;
        } );
        return results;
    }
}

// {
//     "index": 95,
//     "_id": "5c01097ee7b50db48e267483",
//     "cost": "812.79",
//     "detailsOfPayent": {
//       "Type": 5,
//       "company": "MANGELICA",
//       "date": "03-07-2014"
//     }
//   }

let data = new Data();
//console.log( data.totalMoney(2014) );
//console.log( data.getMoneyBy( (item) => item.details.company ) );
//console.log( data.getMoneyBy( (item) => item.details.type ) );
//console.log( data.getMoneyBy( (item) => item.details.date.getMonth()+1 ) );
console.log( data.getMoneyBy( (item) => item.details.date.getDay() ) );
