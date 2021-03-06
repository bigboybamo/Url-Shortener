const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded());
const urlShortener = require('node-url-shortener');
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.sendfile('url.html',{root: __dirname})
});

app.post('/url',(req,res)=>{
    const url = req.body.url;
    urlShortener.short(url,(err, shortUrl)=>{
        res.send(shortUrl);
    })
    })

app.listen(port,()=>{
    console.log(`Url-shortener listening on ${port}`);

});



