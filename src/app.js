const express = require("express");
const app = express();

const path = require("path");
const port = 3031;


// CONFIG

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

// MIDDLEWARE
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static("../public/images"));
app.use(express.json());


// ROUTES
const otherRoutes = require('./routes/other.routes');


// ROUTERS
app.use('/', otherRoutes);



app.listen(port, () => console.log(`http://localhost:${port}`))
