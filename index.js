const express = require('express')
const handlebars = require('express-handlebars').engine;
const app = express();
const path = require('path');
const morgan = require("morgan");
const port = 5000
//HTTP
app.use(morgan("combined"));
app.engine('handlebars',handlebars())
app.set('view engine', 'handlebars');

app.set('views', './views');

app.get('/', (req, res) => {
  res.render("home")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  
})