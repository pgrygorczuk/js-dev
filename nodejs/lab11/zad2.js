const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

// npm install mustache-express

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

function calcTax(tax, amountWithTax){
    const amountTax = amountWithTax * tax / 100;
    return {
        tax: amountTax,
        amount: amountWithTax = amountTax,
    }
}

app.get('/:tax/:amount', (req, res) => {
    // const scope = {
    //     header: 'heloo!',
    //     paragraphText: 'some paragraph text',
    // };
    const { tax, amount } = req.params;
    const result = calcTax(tax, amount);
    const scope = {
        amount,
        tax,
        amountTax: result.tax,
        amountWithoutTax: result.amount,
    };
    res.render('zad2', scope); // zad2 -> zad2.mustache
});

app.listen(4700, () => console.log('Server stared.'));
