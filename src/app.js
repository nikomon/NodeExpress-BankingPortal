const path = require('path');
const express = require('express');

const accountRoutes = require('./routes/accounts.js');
const servicesRoutes = require('./routes/services.js');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));


app.listen(3000, () => console.log('PS Project Running on port 3000!'));