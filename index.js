const express = require('express');
const handlebars = require('express-handlebars').engine;
const app = express();
const path = require('path');
const morgan = require("morgan");
const methodOverride = require('method-override')
const port = 5000
const route = require('./routes/index')
//Connect MongoDB
const db = require('./config/db');
db.connect();
//HTTP
app.use(morgan("combined"));
//methodOverride
app.use(methodOverride('_method'));
//Meadleware
app.use(express.urlencoded())
app.use(express.json())

app.engine('handlebars',handlebars());
app.set('view engine', 'handlebars');
//Routes init <Tuyet duong di chuyen>
app.set('views', './views');
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  
})