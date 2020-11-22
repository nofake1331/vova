
var express=require('express');

    app=express(),
    port=process.env.PORT || 9999
    mongoose=require('mongoose'),
    Shop = require('./api/models/todoListModel')
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Bal');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var routes=require('./api/routes/todoListRoutes');
routes(app);
app.listen(port);
