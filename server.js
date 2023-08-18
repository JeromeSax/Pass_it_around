const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send(`<h1>99 Bottles of beer on the wall</h1><br/><a href="/98">takemone down, pass it around</a>`)
})

app.get('/:number_of_bottles', (req, res) => {
    const numberOfBottles = req.params.number_of_bottles;
    if (numberOfBottles > 0) {
        res.send(`
        <h1>${numberOfBottles} bottles of wine on the wall</h1><br> 
        <a href='/${numberOfBottles - 1}'>Take one down, pass it around.</a>`);
    } else {
        res.send(`
        <h1>${numberOfBottles} bottles of wine on the wall</h1><br> 
        <a href='/'>Start Over</a>`);
    }
});


app.listen(port,() => {
    console.log('listening on port' , port);
});