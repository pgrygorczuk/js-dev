// let data = require("./Data.json");
// console.log(data[0]._id);

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
    moneyByCompany()
    {
        let companies = {};
        this.data.forEach( item => {
            if( !companies[item.details.company] )
                companies[item.details.company] = 0.0;
            companies[item.details.company] += item.cost;
        });
        return companies;
    }
    moneyByType()
    {
        let types = {};
        this.data.forEach( item => {
            if( !types[item.details.type] )
                types[item.details.type] = 0.0;
            types[item.details.type] += item.cost;
        });
        return types;
    }
    moneyByMonth()
    {
        let months = {}, month;
        this.data.forEach( item => {
            month = item.date.getMonth() + 1;
            if( !months[month] )
                months[month] = 0.0;
            months[month] += item.cost;
        });
        return types;
    }
    moneyByWeekDay()
    {
        let weeks = {};
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
// console.log( data.data[0] );
// console.log( data.totalMoney(2014) );
// console.log( data.moneyByCompany() );
// console.log( data.moneyType() );
// console.log( data.moneyByMonth() );
// console.log( data.moneyByWeek() );
console.log( data.getMoneyBy( (item) => item.details.type ) );
