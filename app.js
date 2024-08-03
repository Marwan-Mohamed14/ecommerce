require('dotenv').config();
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Use the 'views' directory

app.use(expressLayouts);
app.set('layout', 'layouts/main'); // Layout path relative to 'views'
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/account', (req, res) => {
    res.render('account', { title: 'Account Page' });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
