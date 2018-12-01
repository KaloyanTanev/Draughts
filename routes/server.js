var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<b>Welcome</b> v na6ata malka igra ;)');
});

app.get('/welcome', function (req, res){
    res.send('<b>Dobre</b> Doshli ste ni na gosti');
});

app.use(function(req, res, next){
    res.status(404).send("Sorry, that route mi e v gyza.");
});

app.listen(3000, function (){
    console.log('Example pi6ki listening on port 3000');
});